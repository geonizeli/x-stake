import BigNumber from "bignumber.js";
import type { ChangeEvent, FC } from "react";
import React, { useState } from "react";
import cx from "classnames";
import { useRelayEnvironment } from "react-relay";

import { Modal } from "../../../../components";
import { commitCreateStakeRemoveOrderMutation } from "./commitCreateStakeRemoveOrder";

const inputBaseStyles =
  "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-3";

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
          <input
            className={cx(inputBaseStyles)}
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
        <button
          className="cursor-pointer py-2 px-4 disabled:opacity-50 disabled:cursor-default bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          disabled={!stakeAvaliable}
          type="submit"
        >
          Remover Stake
        </button>
      </form>
    </Modal>
  );
};
