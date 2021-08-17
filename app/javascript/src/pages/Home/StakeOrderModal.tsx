import type { ChangeEvent, FC } from "react";
import React, { useState } from "react";
import cx from "classnames";
import { BigNumber } from "bignumber.js";

import { Modal } from "../../components";

type Props = {
  poolName: string;
  cakeBalance: string;
};

const inputBaseStyles =
  "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-3";

export const StakeOrderModal: FC<Props> = ({ poolName, cakeBalance }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [investAmountInput, setInvestAmountInput] = useState("0");

  const avaliableCake = new BigNumber(cakeBalance);
  const investAmount = new BigNumber(investAmountInput);

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onSubmit = () => {};

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
        <span className="mb-2">CAKE disponível: {cakeBalance}</span>
        <form onSubmit={onSubmit} className="bg-white py-2">
          <div className="flex flex-row">
            <input
              className={cx(inputBaseStyles)}
              type="number"
              value={investAmountInput}
              onChange={handleInvestInput}
            />
            <button
              type="button"
              disabled={investAmountInput === cakeBalance}
              className="flex items-center mb-3 ml-3 font-bold rounded-full text-red-500"
              onClick={() => {}}
            >
              Max
            </button>
          </div>
          {avaliableCake.isEqualTo(0) && (
            <span className="text-red-500 mb-1">Você não possuí saldo.</span>
          )}
          <button
            className="cursor-pointer py-2 px-4 disabled:opacity-50 disabled:cursor-default bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            disabled={!stakeAvaliable}
            type="submit"
          >
            Fazer Stake
          </button>
        </form>
      </Modal>
    </div>
  );
};
