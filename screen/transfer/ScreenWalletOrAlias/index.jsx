"use client";
import Image from "next/image";
import IconoScrollRounded from "public/IconoScrollRounded.png";
import useForm from "../../../hooks/useForm";
import WarningIcon from "public/WarningIcon.png";
export default function ScreenWalletOrAlias() {
  const [form, handleChange, resetForm] = useForm({
    amount: "",
    alias: "",
    wallet: "",
  });

  const handleSendTransfer = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="mx-4">
      <div className="flex w-full justify-center my-8">
        <Image src={IconoScrollRounded} alt="Icono Scroll" />
      </div>
      <div className="">
        <div>
          <form className="w-full text-center">
            <label className="text-xl text-gray-400 font-semibold">
              Ingresa un monto
            </label>
            <input
              type="number"
              name="amount"
              onChange={handleChange}
              value={form.amount}
              placeholder="0.00"
              className="py-6 text-center text-7xl w-full rounded-lg mt-8 text-black font-bold"
            />
            <div className="w-full underline border"></div>
          </form>
        </div>
      </div>
      <div>
        <form>
          <input
            type="text"
            name="alias"
            onChange={handleChange}
            value={form.alias}
            placeholder="Ingrese el alias"
            className="flex flex-row py-4 px-2 border-[#D1D1D1] rounded-lg border w-full items-center text-black mt-4 justify-between"
          />
          <input
            type="text"
            name="wallet"
            onChange={handleChange}
            value={form.wallet}
            placeholder="Ingrese la wallet"
            className="flex flex-row py-4 px-2 border-[#D1D1D1] rounded-lg border w-full items-center text-black mt-4 justify-between"
          />
        </form>
      </div>
      <div className=" bg-orange-100 rounded-lg px-2 py-2 border border-orange-500 mt-4">
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
      <div className="w-full my-8">
        <button
          className={`${"bg-[#222fe6]"} text-white font-bold py-4 px-6 items-center rounded-lg w-full text-center`}
          onClick={(e) => handleSendTransfer(e)}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
