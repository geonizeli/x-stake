import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useFragment } from "react-relay";
import copy from "copy-to-clipboard";

import { Button, Modal } from "../../../../components";
import { usePixQr } from "./hooks/usePixQr";
import type { Show_deposit_order$key } from "./__generated__/Show_deposit_order.graphql";
import { centsToUnit } from "../../../../utils/fiatMoney";
import { getStatusTextAndColors } from "../../utils/processStatus";

type Props = {
  orderRef: Show_deposit_order$key;
  onClose: () => void;
};

export const Show: FC<Props> = ({ orderRef, onClose }) => {
  const order = useFragment<Show_deposit_order$key>(
    graphql`
      fragment Show_deposit_order on DepositOrder {
        transactionId
        paidAmountCents
        receivedAmountCents
        status
        createdAt
      }
    `,
    orderRef
  );

  const { qr, payload } = usePixQr({
    value: order.paidAmountCents / 100,
    transactionId: order.transactionId,
  });

  const handleClose = (_value: boolean) => {
    onClose();
  };

  const handleCopy = () => {
    copy(payload);
  };

  const [statusLabel] = getStatusTextAndColors(order.status);

  return (
    <Modal
      title="Pedido de deposito"
      isOpen
      setIsOpen={handleClose}
      className="w-full md:max-w-xl"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:pt-2">
          <ul>
            <li>
              Montante pago:{" "}
              <span className="font-bold">
                {centsToUnit(order.paidAmountCents)} BRL
              </span>
            </li>
            <li>
              Montante recebido:{" "}
              <span className="font-bold">
                {centsToUnit(order.receivedAmountCents)}
              </span>
            </li>
            <li>
              Pedido feito em:{" "}
              <span className="font-bold">
                {new Date(order.createdAt as string).toLocaleTimeString()}
              </span>
            </li>
            <li>
              Metodo de pagamento: <span className="font-bold">PIX</span>
            </li>
            <li>
              Status: <span className="font-bold">{statusLabel}</span>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="w-full m-auto"
            src={qr}
            alt="QR code para o PIX de deposito"
          />
          <Button onClick={handleCopy}>Copiar codigo</Button>
        </div>
      </div>
    </Modal>
  );
};
