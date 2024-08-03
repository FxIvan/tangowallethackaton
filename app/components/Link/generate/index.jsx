"use client";
import Image from "next/image";
import TangoWalletIcon from "public/TangoWalletIcon.png";
import iconCopyPaste from "public/copypacteicon.png";
import WarningIcon from "public/WarningIcon.png";
import { useRouter } from "next/navigation";

export default function GenerateLinkComponent({ amount, wallet }) {
  const router = useRouter();
  return (
    <div className="h-[70vh] flex justify-between flex-col">
      <div className="text-black border rounded-2xl border-[#D1D1D1] p-4">
        <div className="flex justify-center">
          <Image src={TangoWalletIcon} alt="Icono Scroll" />
        </div>
        <div className="flex flex-row py-4 px-2 border-[#D1D1D1] rounded-lg border w-80 items-center">
          <div className="mx-4 undeline truncate">{`http://localhost:3000/protect/transfer/qr?amount=${amount}&wallet=${wallet}`}</div>
          <div>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  `http://localhost:3000/protect/transfer/qr?amount=${amount}&wallet=${wallet}`
                )
              }
              className="flex items-center justify-center"
            >
              <Image
                src={iconCopyPaste}
                alt="Icono Copy Paste"
                className="w-12 h-6"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-row justify-between my-4 pt-5 border-t-2 border-gray-300">
            <h3 className="text-[#6B8FFF] font-semibold">Monto a depositar:</h3>
            <h3 className="font-semibold">${amount}</h3>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" bg-orange-100 rounded-lg px-2 py-2 border border-orange-500">
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
