import type { ChangeEvent, FC } from "react";
import React, { useState } from "react";
import { BigNumber } from "bignumber.js";
import { useRelayEnvironment } from "react-relay";

import { Button, Modal } from "../../../components";
import { commitCreateStakeOrderMutation } from "./createStakeOrder";
import { Input } from "../../../components/Input/Input";

type Props = {
  poolName: string;
  balance: string;
};

export const StakeOrderModal: FC<Props> = ({ poolName, balance }) => {
  const environment = useRelayEnvironment();
  const [isOpen, setIsOpen] = useState(false);
  const [investAmountInput, setInvestAmountInput] = useState("0");

  const avaliableCake = new BigNumber(balance);
  const investAmount = new BigNumber(investAmountInput);

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onSubmit = () => {
    commitCreateStakeOrderMutation(environment, {
      amount: investAmountInput,
      poolName,
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
      setInvestAmountInput(value);
    }
  };

  const handleMaxButton = () => {
    setInvestAmountInput(balance);
  };

  const stakeAvaliable =
    avaliableCake.isGreaterThan(0) &&
    avaliableCake.isLessThanOrEqualTo(investAmount);

  return (
    <div className="mt-4">
      <button
        onClick={handleButtonClick}
        type="button"
        className="py-2 px-4 text-blue-600 border-2 border-blue-600 hover:bg-blue-100 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
      >
        Stake
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={`Invista em ${poolName}`}
      >
        <span className="mb-2">CAKE disponível: {balance}</span>
        <form onSubmit={onSubmit} className="bg-white py-2">
          <div className="flex flex-row">
            <Input
              type="number"
              value={investAmountInput}
              onChange={handleInvestInput}
            />
            <button
              type="button"
              disabled={investAmountInput === balance}
              className="flex items-center mb-3 ml-3 font-bold rounded-full text-red-500"
              onClick={handleMaxButton}
            >
              Max
            </button>
          </div>
          {avaliableCake.isEqualTo(0) && (
            <span className="text-red-500 mb-1">Você não possuí saldo.</span>
          )}
          <Button disabled={!stakeAvaliable} type="submit">
            Fazer Stake
          </Button>
        </form>
      </Modal>
    </div>
  );
};
