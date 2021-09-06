import type { FC } from "react";
import React, { useState } from "react";

import { Button, Input } from "../../../../components";

type Props = {
  submitCallback: (amount: number) => void;
  className?: string;
};

export const Form: FC<Props> = ({ className, submitCallback }) => {
  const [amountInput, setAmountInput] = useState<number>();

  const handleAmountChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newFiatAmount = parseInt(value, 10) || 0;

    if (newFiatAmount < 0) return;
    setAmountInput(newFiatAmount);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amountInput) {
      submitCallback(amountInput);
    }
  };

  const amount = amountInput ?? 0;

  return (
    <form onSubmit={onSubmit} className={className}>
      <div>
        <p className="text-gray-900 mb-1">Quantia em BRL</p>
        <Input value={amountInput} onChange={handleAmountChange} />
      </div>
      <div className="flex">Você recebe: {amount + amount * 0.05} BRL</div>
      <div className="flex">Taxa de transação: {amount * 0.05} BRL</div>
      <Button className="mt-2" type="submit" disabled={!amountInput}>
        Confirmar
      </Button>
    </form>
  );
};
