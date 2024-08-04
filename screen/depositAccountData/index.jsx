"use client";
import Image from "next/image";
import TangoWalletIcon from "public/TangoWalletIcon.png";
import iconCopyPaste from "public/copypacteicon.png";
import WarningIcon from "public/WarningIcon.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DepositAccountData({ alias, wallet }) {
  const router = useRouter();
  return (
    <div className="mx-4 my-14">
      <div className="text-black text-md text-center font-semibold">
        <h3>Comparte tu información para realizar un depósito.</h3>
      </div>
      <div className="my-8">
        <div className="flex justify-center">
          <div>
            <Image src={TangoWalletIcon} alt="Icono Scroll" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row py-4 px-2 border-[#D1D1D1] rounded-lg border w-full items-center text-black justify-between">
            <div className="mx-4 undeline truncate">{alias}</div>
            <div>
              <button
                onClick={() => navigator.clipboard.writeText(alias)}
                className="flex items-center justify-center"
              >
                <Image
                  src={iconCopyPaste}
                  alt="Icono Copy Paste"
                  className="w-4 h-4"
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 border-[#D1D1D1] rounded-lg border w-full items-center text-black mt-4 justify-between">
            <div className="mx-4 undeline truncate">{wallet}</div>
            <div>
              <button
                onClick={() => navigator.clipboard.writeText(wallet)}
                className="flex items-center justify-center"
              >
                <Image
                  src={iconCopyPaste}
                  alt="Icono Copy Paste"
                  className="w-4 h-4"
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-orange-100 rounded-lg px-2 py-2 border border-orange-500 mt-12">
        <div className="flex flex-row items-center  pb-4">
          <Image src={WarningIcon} alt="Warning Icon" className="me-4" />
          <h3 className="text-xl text-orange-400">¡Atención!</h3>
        </div>
        <div>
          <p className="text-black text-xs">
            Solo puedes depositar EARS en la red de Scroll. Asegúrate de
            seleccionar la red correcta antes de realizar tu depósito para
            evitar pérdidas de fondos.
          </p>
        </div>
      </div>
      <button
        onClick={() => router.push("/protect/dashboard")}
        className="bg-black text-white font-bold py-4 px-6 items-center rounded-lg text-center mt-4 w-full" //bg-black text-white font-bold py-4 px-6 items-center rounded-lg text-center mt-8
      >
        Volver al inicio
      </button>
    </div>
  );
}
