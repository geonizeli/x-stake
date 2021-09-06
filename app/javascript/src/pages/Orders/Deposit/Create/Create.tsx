import type { FC } from "react";
import React, { useState } from "react";
import { useRelayEnvironment } from "react-relay";

import { Button, Modal } from "../../../../components";
import { useDepositContext } from "../DepositProvider";
import { commitCreateDepositOrderMutation } from "./commitCreateDepositOrder";
import { Form } from "./Form";

export const Create: FC = () => {
  const environment = useRelayEnvironment();
  const { setOpenOrder } = useDepositContext();

  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit = (amount: number) => {
    commitCreateDepositOrderMutation(
      environment,
      {
        amountCents: amount * 100,
      },
      (res) => {
        if (!res.createDepositOrder?.order) return;

        setIsOpen(false);
        setOpenOrder(res.createDepositOrder?.order);
      }
    );
  };

  return (
    <div className="flex">
      <div className="ml-auto">
        <Button onClick={() => setIsOpen(true)}>Novo deposito</Button>
        <Modal title="Novo deposito" isOpen={isOpen} setIsOpen={setIsOpen}>
          <Form className="" submitCallback={onFormSubmit} />
        </Modal>
      </div>
    </div>
  );
};
