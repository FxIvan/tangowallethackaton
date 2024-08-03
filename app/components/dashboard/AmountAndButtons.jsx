"use client";
import Image from "next/image";
import Link from "next/link";
import QRIcon from "public/QRIcon.png";

const ButtonQRDepoAndWithdrawal = () => {
  return (
    <div className="flex flex-row justify-around mx-4">
      <Link
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
        href={"/protect/readqr"}
      >
        <Image
          src={QRIcon}
          alt="QR Icon"
          width={80}
          height={80}
          className="h-4 w-4"
        />
      </Link>
      <Link
        href={"/protect/deposit"}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-semibold"
      >
        Depositar
      </Link>
      <Link
        href={"/protect/transfer/walletoralias"}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-semibold"
      >
        Transferir
      </Link>
    </div>
  );
};

export default function AmountAndButtons() {
  return (
    <div className="h-1/2">
      <div className="h-1/4">
        <div className="font-bold flex flex-col h-full justify-center items-center ">
          <div className="mb-4">
            <span className="text-gray-500">Balance</span>
          </div>
          <h3 className="text-gray-800 text-4xl font-bold">$1,000.00</h3>
        </div>
      </div>
      <div className="my-4">
        <ButtonQRDepoAndWithdrawal />
      </div>
    </div>
  );
}
