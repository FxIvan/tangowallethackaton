"use client";
import Image from "next/image";
import Link from "next/link";
import QRIcon from "public/QRIcon.png";

const ButtonQRDepoAndWithdrawal = () => {
  return (
    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
      <Link
        className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[51px] relative gap-1 p-4 rounded-lg bg-[#dae9ff]"
        href={"/protect/readqr"}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M2.5 7.83333H7.83333V2.5H2.5V7.83333ZM3.83333 3.83333H6.5V6.5H3.83333V3.83333Z"
            fill="#454545"
          ></path>
          <path
            d="M2.5 14.5H7.83333V9.16667H2.5V14.5ZM3.83333 10.5H6.5V13.1667H3.83333V10.5Z"
            fill="#454545"
          ></path>
          <path
            d="M9.16667 2.5V7.83333H14.5V2.5H9.16667ZM13.1667 6.5H10.5V3.83333H13.1667V6.5Z"
            fill="#454545"
          ></path>
          <path
            d="M14.5 13.1667H13.1667V14.5H14.5V13.1667Z"
            fill="#454545"
          ></path>
          <path
            d="M10.5 9.16667H9.16667V10.5H10.5V9.16667Z"
            fill="#454545"
          ></path>
          <path
            d="M11.8333 10.5H10.5V11.8333H11.8333V10.5Z"
            fill="#454545"
          ></path>
          <path
            d="M10.5 11.8333H9.16667V13.1667H10.5V11.8333Z"
            fill="#454545"
          ></path>
          <path
            d="M11.8333 13.1667H10.5V14.5H11.8333V13.1667Z"
            fill="#454545"
          ></path>
          <path
            d="M13.1667 11.8333H11.8333V13.1667H13.1667V11.8333Z"
            fill="#454545"
          ></path>
          <path
            d="M13.1667 9.16667H11.8333V10.5H13.1667V9.16667Z"
            fill="#454545"
          ></path>
          <path d="M14.5 10.5H13.1667V11.8333H14.5V10.5Z" fill="#454545"></path>
        </svg>
      </Link>
      <Link
        href={"/protect/deposit"}
        className="flex justify-center items-center flex-grow relative gap-1 p-4 rounded-lg bg-[#dae9ff] text-base font-medium text-left text-[#454545]"
      >
        Depositar
      </Link>
      <Link
        href={"/protect/transfer/walletoralias"}
        className="flex justify-center items-center flex-grow relative gap-1 p-4 rounded-lg bg-[#dae9ff] text-base font-medium text-left text-[#454545]"
      >
        Transferir
      </Link>
    </div>
  );
};

export default function AmountAndButtons({ userInfo }) {
  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-6 p-4 rounded-2xl">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
        {/*<div className="font-bold flex flex-col h-full justify-center items-center ">*/}

        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
          <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1 p-1">
            <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#888]">
              Balance
            </p>
          </div>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative p-1">
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
                d="M8.00008 3.98334C10.5267 3.98334 12.7801 5.40334 13.8801 7.65C13.4867 8.46334 12.9334 9.16334 12.2734 9.73L13.2134 10.67C14.1401 9.85 14.8734 8.82334 15.3334 7.65C14.1801 4.72334 11.3334 2.65 8.00008 2.65C7.15341 2.65 6.34008 2.78334 5.57341 3.03L6.67341 4.13C7.10675 4.04334 7.54675 3.98334 8.00008 3.98334ZM7.28675 4.74334L8.66675 6.12334C9.04675 6.29 9.35341 6.59667 9.52008 6.97667L10.9001 8.35667C10.9534 8.13 10.9934 7.89 10.9934 7.64334C11.0001 5.99 9.65341 4.65 8.00008 4.65C7.75341 4.65 7.52008 4.68334 7.28675 4.74334ZM1.34008 2.56334L3.12675 4.35C2.04008 5.20334 1.18008 6.33667 0.666748 7.65C1.82008 10.5767 4.66675 12.65 8.00008 12.65C9.01341 12.65 9.98675 12.4567 10.8801 12.1033L13.1601 14.3833L14.1001 13.4433L2.28008 1.61667L1.34008 2.56334ZM6.34008 7.56334L8.08008 9.30334C8.05341 9.31 8.02675 9.31667 8.00008 9.31667C7.08008 9.31667 6.33341 8.57 6.33341 7.65C6.33341 7.61667 6.34008 7.59667 6.34008 7.56334ZM4.07341 5.29667L5.24008 6.46334C5.08675 6.83 5.00008 7.23 5.00008 7.65C5.00008 9.30334 6.34675 10.65 8.00008 10.65C8.42008 10.65 8.82008 10.5633 9.18008 10.41L9.83341 11.0633C9.24675 11.2233 8.63341 11.3167 8.00008 11.3167C5.47341 11.3167 3.22008 9.89667 2.12008 7.65C2.58675 6.69667 3.26675 5.91 4.07341 5.29667Z"
                fill="#888888"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 p-1">
            <p class="flex-grow-0 flex-shrink-0 text-[32px] font-black text-left text-[#3d3d3d]">
              $
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-[40px] font-black text-left text-[#3d3d3d]">
              {userInfo.balance}
            </p>
          </div>
        </div>
        {/*</div>*/}
      </div>
      {/*<div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">*/}
      <ButtonQRDepoAndWithdrawal />
      {/*</div>*/}
    </div>
  );
}
