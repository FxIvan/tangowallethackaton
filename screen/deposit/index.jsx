"use client";
import QRIconAzul from "public/qrazul.png";
import EnlaceAzul from "public/enlaceazul.png";
import PersonIconAzul from "public/personiconazul.png";
import WarningIcon from "public/WarningIcon.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PaymentMP from "public/paymentsmp.png";

const ButtonSelect = ({
  children,
  onClick,
  optionSelectedCurrent,
  addClassname,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        optionSelectedCurrent ? "bg-[#878dd8]" : "bg-[#f6f6f6]"
      } text-black font-bold py-4 px-6 items-center flex flex-row rounded-lg my-3 w-full ${addClassname}`} // w-64
    >
      {children}
    </button>
  );
};

export default function ScreenDeposit() {
  const [optionSelected, setOptionSelected] = useState(null);

  const options = [
    {
      name: "Generar QR",
      icon: QRIconAzul,
      current: false,
      key: "generarQR",
      href: "/protect/deposit/qr",
    },
    {
      name: "Generar enlace",
      icon: EnlaceAzul,
      current: false,
      key: "generateLink",
      href: "/protect/deposit/link",
    },
    {
      name: "Datos de cuenta",
      icon: PersonIconAzul,
      current: false,
      key: "accountData",
      href: "/protect/deposit/account",
    },
  ];

  const optionsDeposits = [
    {
      name: "Mercado pago",
      icon: PaymentMP,
      current: false,
      key: "marketPayment",
      href: "/protect/deposit",
    },
  ];
  const router = useRouter();

  return (
    <div className="flex flex-col justify-around items-start self-stretch flex-grow gap-8 p-4 mt-12">
      <div>
        <p class="flex-grow w-full text-base font-medium text-[#454545] text-center">
          ¿Cómo quieres generar la dirección de depósito?
        </p>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-4 rounded-2xl">
        <p class="flex-grow-0 flex-shrink-0 w-[296px] text-[11px] font-medium text-left text-[#454545]">
          Recibir
        </p>
        {options.map((option, index) => (
          <ButtonSelect
            key={index}
            onClick={() => setOptionSelected(option.href)}
            optionSelectedCurrent={optionSelected === option.href}
          >
            <Link className={`flex flex-row items-center`} href={option.href}>
              <Image src={option.icon} alt={option.name} />
              <span className="mx-2">{option.name}</span>
            </Link>
          </ButtonSelect>
        ))}
        <p class="flex-grow-0 flex-shrink-0 w-[296px] text-[11px] font-medium text-left text-[#454545]">
          Depositar
        </p>
        {optionsDeposits.map((option, index) => (
          <ButtonSelect
            key={index}
            onClick={() => setOptionSelected("")}
            optionSelectedCurrent={optionSelected === option.href}
            addClassname="opacity-50"
          >
            <Link className={`flex flex-row items-center`} href={option.href}>
              <Image src={option.icon} alt={option.name} />
              <span className="mx-2">{option.name}</span>
              <span className="text-sm font-normal">Pronto</span>
            </Link>
          </ButtonSelect>
        ))}
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
    </div>
  );
}
