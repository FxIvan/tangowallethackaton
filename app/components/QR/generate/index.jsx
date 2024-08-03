import Link from "next/link";
import QRCode from "react-qr-code";

export default function GenerateQR({ value }) {
  return (
    <div className="w-80">
      <QRCode
        size={80}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 80 80`}
      />

      <div>
        <p className="text-center text-gray-400 text-sm mt-2">
          Escanea este código QR para realizar el pago
        </p>
      </div>

      <div className="w-full text-center mt-10">
        <Link
          href="/protect/dashboard"
          className="text-center text-blue-400 text-sm mt-2"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
