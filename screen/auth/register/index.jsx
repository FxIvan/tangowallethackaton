"use client";
import Image from "next/image";
import GoogleIcon from "public/googleiconpng.png";
import { signIn } from "next-auth/react";
export default function ScreenRegister() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div>
        <buton
          onClick={async () => {
            await signIn("google", {
              callbackUrl: "/protect/portfolio",
            });
          }}
          className="flex flex-row items-center uppercase bg-gray-300 py-2 px-4 rounded-lg text-black font-bold cursor-pointer"
        >
          Registrate con google
          <Image src={GoogleIcon} alt="Google Icon" className="h-6 w-12" />
        </buton>
      </div>
    </div>
  );
}
