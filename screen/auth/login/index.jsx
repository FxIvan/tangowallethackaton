"use client";
import Image from "next/image";
import TangoWalletLetra from "public/tangowalletLetra.png";
import GoogleIcon from "public/GoogleIconoWhite.png";
import { signIn } from "next-auth/react";
import { useState } from "react";
const ButtonLoginWithGoogle = () => {
  return (
    <button
      onClick={async () => {
        await signIn("google", {
          callbackUrl: "/protect/dashboard",
        });
      }}
      className="bg-[#222fe6] text-white font-bold py-4 px-6 items-center flex flex-row rounded-lg w-64 text-center justify-between"
    >
      <Image src={GoogleIcon} alt="Google Icon" />
      <span className="mx-2">Ingresar con Google</span>
    </button>
  );
};

const ButtonRegisterWithGoogle = () => {
  return (
    <button
      onClick={async () => {
        await signIn("google", {
          callbackUrl: "/protect/dashboard",
        });
      }}
      className="bg-[#222fe6] text-white font-bold py-4 px-6 items-center flex flex-row rounded-lg w-64 text-center justify-between"
    >
      <Image src={GoogleIcon} alt="Google Icon" />
      Registrate con google
    </button>
  );
};
export default function ScreenLogin() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="h-screen items-center">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-center">
          <Image src={TangoWalletLetra} alt="Tango Wallet Letra" />
        </div>
        <div>
          <div className="w-full flex justify-center">
            {isRegister ? (
              <ButtonRegisterWithGoogle />
            ) : (
              <ButtonLoginWithGoogle />
            )}
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="bg-[#e7e7e7] font-bold text-black w-64 py-4 px-6 rounded-lg"
            >
              {isRegister ? "Iniciar sesión" : "Registrarse"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
