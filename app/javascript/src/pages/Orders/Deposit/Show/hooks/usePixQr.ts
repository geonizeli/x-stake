import { useEffect, useState } from "react";
import { QrCodePix } from "qrcode-pix";

type Props = {
  value: number;
  transactionId: string;
};

export const usePixQr = ({ value, transactionId }: Props) => {
  const [qr, setQr] = useState<string>();

  const qrCodePix = QrCodePix({
    version: "01",
    key: "joao.geonizeli@gmail.com",
    name: "X Stake",
    city: "TERESOPOLIS",
    transactionId,
    value,
    notRepeatPayment: true,
  });

  useEffect(() => {
    qrCodePix.base64().then((result) => {
      setQr(result);
    });
  }, []);

  return {
    payload: qrCodePix.payload(),
    loading: !qr,
    qr,
  };
};
