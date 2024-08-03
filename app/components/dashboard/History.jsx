"use client";
import Image from "next/image";
import FolderGray from "public/FolderGray.png";

const Bottomless = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 rounded-lg py-6 px-4">
      <span className="w-full text-gray-600 mb-6">Ultimos movimientos</span>
      <Image src={FolderGray} alt="Ultimos Movimientos" />
    </div>
  );
};

const TransacionRow = ({ title, amount, date }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full py-4 border-b border-gray-200">
      <div className="flex flex-col">
        <span className="text-gray-600">{title}</span>
        <span className="text-gray-400">{date}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-600 font-semibold">{amount}</span>
      </div>
    </div>
  );
};

export default function History() {
  return (
    <div className="flex h-auto mx-4">
      {/*<Bottomless /> */}
      <div className="flex flex-col w-full">
        <TransacionRow title="Deposito" amount="$1,000.00" date="12/12/2021" />
        <TransacionRow title="Deposito" amount="$1,000.00" date="12/12/2021" />
        <TransacionRow title="Deposito" amount="$1,000.00" date="12/12/2021" />
      </div>
    </div>
  );
}
