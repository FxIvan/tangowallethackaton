"use client";
import { useSearchParams } from "next/navigation";
import TangoWalletIcon from "public/TangoWalletIcon.png";
import Image from "next/image";

export default function ScreenTransferQR() {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount");
  const wallet = searchParams.get("wallet");

  const handleSendTransferQR = (e) => {
    e.preventDefault();
    console.log("Transferencia realizada");
  };

  return (
    <div className="mx-4">
      <div className="flex justify-center my-12">
        <Image src={TangoWalletIcon} alt="Tango walle icon" />
      </div>
      <div className="border-2 border-[#D1D1D1] my-12 rounded-lg text-black">
        <div className="py-4 p-2">
          <ul className="flex flex-row justify-between">
            <li className="text-[#888]">Monto</li>
            <li className="text-[#454545]">{amount}</li>
          </ul>
        </div>
        <div className="border-t-2 border-[#D1D1D1] py-4 p-2">
          <ul className="flex flex-row justify-between">
            <li className="text-[#888]">Wallet</li>
            <li className="text-[#454545] w-32 truncate text-end">
              {wallet.slice(0, -5)}...
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full my-12">
        <button
          className={`${"bg-[#222fe6]"} text-white font-bold py-4 px-6 items-center rounded-lg w-full text-center`}
          onClick={(e) => handleSendTransferQR(e)}
        >
          Confirmar transferencia
        </button>
      </div>
    </div>
  );
}
