"use client";
import QRIconAzul from "public/qrazul.png";
import EnlaceAzul from "public/enlaceazul.png";
import PersonIconAzul from "public/personiconazul.png";
import WarningIcon from "public/WarningIcon.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ButtonSelect = ({ children, onClick, optionSelectedCurrent }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        optionSelectedCurrent ? "bg-[#878dd8]" : "bg-[#f6f6f6]"
      } text-black font-bold py-4 px-6 items-center flex flex-row rounded-lg my-6 w-full`} // w-64
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

  const router = useRouter();

  return (
    <div className="h-[80vh] flex flex-col items-center mx-4 justify-between my-4">
      <div>
        <h3 className="text-black">
          ¿Cómo quieres generar la dirección de depósito?
        </h3>
      </div>
      <div className="w-full">
        {options.map((option, index) => (
          <ButtonSelect
            key={index}
            onClick={() => setOptionSelected(option.href)}
            optionSelectedCurrent={optionSelected === option.href}
          >
            <div className={`flex flex-row items-center`}>
              <Image src={option.icon} alt={option.name} />
              <span className="mx-2">{option.name}</span>
            </div>
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
      <div className="w-full">
        <button
          className={`${
            optionSelected != null ? "bg-[#222fe6]" : "bg-slate-600"
          } text-white font-bold py-4 px-6 items-center rounded-lg w-full text-center`}
          onClick={() => optionSelected && router.push(optionSelected)}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
