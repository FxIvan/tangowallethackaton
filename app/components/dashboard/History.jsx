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
    <div
    class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 p-4 rounded-2xl bg-[#f6f6f6]"
  >
    <div
      class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
    >
      <p class="flex-grow w-64 text-base font-medium text-left text-[#888]">Últimos movimientos</p>
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1 p-2 rounded-lg bg-[#dae9ff]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M3.33325 9.86334L4.27325 10.8033L7.99992 7.08334L11.7266 10.8033L12.6666 9.86334L7.99992 5.19667L3.33325 9.86334Z"
            fill="#454545"
          ></path>
        </svg>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
      <div
        class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1 py-2 border-t-0 border-r-0 border-b border-l-0 border-[#e7e7e7]"
      >
        <div class="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-base text-left text-[#5d5d5d]">
            Depositado
          </p>
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-[11px] text-left text-[#888]">
            Depositar
          </p>
        </div>
        <div class="flex flex-col justify-start items-end flex-grow relative gap-1">
          <div
            class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1"
          >
            <p class="flex-grow-0 flex-shrink-0 text-base text-right text-[#5d5d5d]">$</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-right text-[#5d5d5d]">6541</p>
          </div>
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-[11px] text-right text-[#888]">
            Depositar
          </p>
        </div>
      </div>
      <div
        class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1 py-2 border-t-0 border-r-0 border-b border-l-0 border-[#e7e7e7]"
      >
        <div class="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-base text-left text-[#5d5d5d]">
            Enviado
          </p>
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-[11px] text-left text-[#888]">
            Depositar
          </p>
        </div>
        <div class="flex flex-col justify-start items-end flex-grow relative gap-1">
          <div
            class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1"
          >
            <p class="flex-grow-0 flex-shrink-0 text-base text-right text-[#5d5d5d]">$</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-right text-[#5d5d5d]">541</p>
          </div>
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-[11px] text-right text-[#888]">
            Depositar
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1 py-2">
        <div class="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-base text-left text-[#5d5d5d]">
            Recibido
          </p>
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-[11px] text-left text-[#888]">
            Depositar
          </p>
        </div>
        <div class="flex flex-col justify-start items-end flex-grow relative gap-1">
          <div
            class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1"
          >
            <p class="flex-grow-0 flex-shrink-0 text-base text-right text-[#5d5d5d]">$</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-right text-[#5d5d5d]">2000</p>
          </div>
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-36 text-[11px] text-right text-[#888]">
            Depositar
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
