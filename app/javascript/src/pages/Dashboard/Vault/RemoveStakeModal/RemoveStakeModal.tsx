import BigNumber from "bignumber.js";
import type { ChangeEvent, FC } from "react";
import React, { useState } from "react";
import { useRelayEnvironment } from "react-relay";

import { Button, Modal, Input } from "../../../../components";
import { commitCreateStakeRemoveOrderMutation } from "./commitCreateStakeRemoveOrder";

type RemoveStakeModal = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  stakedCake: string;
  poolName?: string;
};

export const RemoveStakeModal: FC<RemoveStakeModal> = ({
  setIsOpen,
  isOpen,
  stakedCake,
  poolName = "",
}) => {
  const enviroment = useRelayEnvironment();
  const [amountInput, setAmountInput] = useState<string>("0");
  const avaliableCake = BigNumber.sum(stakedCake);

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    commitCreateStakeRemoveOrderMutation(enviroment, {
      poolName,
      amount: amountInput,
    });
  };

  const handleInvestInput = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const newInvestAmount = new BigNumber(value);

    if (
      newInvestAmount.isLessThanOrEqualTo(avaliableCake) &&
      newInvestAmount.isGreaterThanOrEqualTo(0)
    ) {
      setAmountInput(value);
    }
  };

  const handleMaxButton = () => {
    setAmountInput(stakedCake);
  };

  const amountToUnstake = new BigNumber(amountInput);

  const stakeAvaliable =
    amountToUnstake.isGreaterThan(0) &&
    amountToUnstake.isLessThanOrEqualTo(avaliableCake);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={handleClose}
      title={`Remover investido em ${poolName}`}
    >
      <span className="mb-2">CAKE disponível: {stakedCake}</span>
      <form onSubmit={onSubmit} className="bg-white py-2">
        <div className="flex flex-row">
          <Input
            type="number"
            value={amountInput}
            onChange={handleInvestInput}
          />
          <button
            type="button"
            disabled={amountInput === stakedCake}
            className="flex items-center mb-3 ml-3 font-bold rounded-full text-red-500"
            onClick={handleMaxButton}
          >
            Max
          </button>
        </div>
        {avaliableCake.isEqualTo(0) && (
          <span className="text-red-500 mb-1">Você não possuí saldo.</span>
        )}
        <Button variant="dangeour" disabled={!stakeAvaliable} type="submit">
          Remover Stake
        </Button>
      </form>
    </Modal>
  );
};
