"use client";
import Link from "next/link";
import { useState } from "react";

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
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-6 p-4 rounded-2xl">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
        {/*<div className="font-bold flex flex-col h-full justify-center items-center ">*/}

        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
          <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1 p-1">
            <p class="flex-grow-0 flex-shrink-0 text-md font-medium text-left text-[#888]">
              Balance
            </p>
          </div>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative p-1 h-8 w-8">
            {showBalance ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                onClick={() => setShowBalance(false)}
              >
                <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                onClick={() => setShowBalance(true)}
              >
                <path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z" />
              </svg>
            )}
          </div>
        </div>
        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 p-1">
            <p class="flex-grow-0 flex-shrink-0 text-[32px] font-black text-left text-[#3d3d3d]">
              $
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-[40px] font-black text-left text-[#3d3d3d]">
              {showBalance ? userInfo.balance : "***"}
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
