import {
  NEXT_PUBLIC_BACKEND,
  NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from "constants/env";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import generateSeedPhrase, {
  createSmartWallet,
} from "../../../../util/generateSeedPhrase";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    error: "/error",
  },
  providers: [
    GoogleProvider({
      clientId: NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Tango Wallet",
      credentials: {
        loginEmail: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        loginPassword: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { loginEmail, loginPassword } = credentials;
        const response = await fetch(`${NEXT_PUBLIC_BACKEND}/user/login`, {
          method: "POST",
          body: JSON.stringify({
            email: loginEmail,
            password: loginPassword,
          }),
          headers: {
            cache: "no-store",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (!data || !data.user || data.statusCode >= 400) {
          throw new Error(btoa(data.message) || "Error");
        }

        return {
          id: data.user._id,
          provider: "credentials",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, trigger, user, session }) {
      if (user && (!account || account.provider != "google")) {
        token.provider = "credentials"; //Provider
        token.accessToken = user[0].id_token; //Token generado por nuestro Backend
        token.user = user[0]; //Datos del usuario
        token.accessToken = user[0].token;
      } else if (account && account.provider === "google") {
        token.provider = "google"; //Provider
        token.accessToken = account.accessToken; //Token generado por nuestro Backend
        token.user = account; //Datos del usuario
      }
      return token;
    },
    async session({ session, token }) {
      session.provider = token.provider; //Provider
      session.accessToken = token.accessToken; //Token generado por nuestro Backend
      session.user = token.user; //Datos del usuario
      return session; //con useSession() en el cliente("use client") podemos acceder a estos datos
    },
    async signIn({ account, profile }) {
      try {
        if (account.provider === "google") {
          console.log("------------------------------------------");
          console.log("ID Token de google: ", account.id_token);
          console.log("------------------------------------------");
          const response = await fetch(
            `${NEXT_PUBLIC_BACKEND}/users/login/google`,
            {
              method: "POST",
              body: JSON.stringify({
                code: account.id_token,
              }),
              headers: {
                cache: "no-store",
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();

          if (!data) {
            console.log("Error Data --->");
            throw new Error(window.btoa(data.message) || "Error");
          }

          if (data.user._id) {
            account.id = data.user._id;
          }

          const keyData = {
            privateKey: "",
            publicKey: "",
            address: "",
          };

          if (data.register) {
            const seedPhareStorage = localStorage.getItem("seedPhrase");
            const { privateKey, publicKey, address } =
              await loadAccountBlockchain(seedPhareStorage);

            keyData.privateKey = privateKey;
            keyData.publicKey = publicKey;
            keyData.address = address;
          } else {
            const seedPhrase = await generateSeedPhrase(data.token);
            localStorage.setItem("seedPhrase", seedPhrase);
            const { privateKey, publicKey, address } =
              await loadAccountBlockchain(seedPhrase);

            keyData.privateKey = privateKey;
            keyData.publicKey = publicKey;
            keyData.address = address;

            await createSmartWallet(address);
          }

          account.accessToken = data.token;
          account.privateKey = keyData.privateKey;
          account.publicKey = keyData.publicKey;
          account.address = keyData.address;

          return {
            id: data.user._id,
            provider: "google",
          };
        }
        return true;
      } catch (error) {
        console.log("Error en el callback signIn", error);
        throw new Error(btoa(error) || "Error");
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
