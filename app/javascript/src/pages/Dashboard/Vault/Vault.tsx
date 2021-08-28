import type { FC } from "react";
import React, { useState } from "react";
import cx from "classnames";
import { XCircleIcon } from "@heroicons/react/outline";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import BigNumber from "bignumber.js";

import type { Vault as VaultType } from "../../../types/yieldwatch";
import { RemoveStakeModal } from "./RemoveStakeModal";
import type { VaultQuery } from "./__generated__/VaultQuery.graphql";

type VaultProps = {
  vault: Partial<VaultType>;
  isLoading: boolean;
};

export const Vault: FC<VaultProps> = ({ vault, isLoading }) => {
  const { stakeOrders } = useLazyLoadQuery<VaultQuery>(
    graphql`
      query VaultQuery(
        $status: ProcessStatus!
        $poolName: String!
        $amount: Float!
      ) {
        stakeOrders(
          filter: {
            status: [$status]
            poolName: { eq: $poolName }
            amount: { lt: $amount }
          }
        ) {
          edges {
            node {
              amount
            }
          }
        }
      }
    `,
    {
      status: "PROCESSING",
      poolName: vault.name ?? "",
      amount: 0,
    }
  );

  const [removeStakeModalIsOpen, setRemoveStakeModalIsOpen] =
    useState<boolean>(false);

  const handleRemoveStakeModal = () => {
    setRemoveStakeModalIsOpen(true);
  };

  const alreadyOnUnstakeOrder = stakeOrders.edges.reduce((acc, current) => {
    return BigNumber.sum(acc, current.node.amount);
  }, new BigNumber(0));

  const totalDepositedAndRewarded =
    (vault.depositedTokens ?? 0) + (vault.totalRewards ?? 0);

  let totalStaked = BigNumber.sum(
    alreadyOnUnstakeOrder,
    totalDepositedAndRewarded
  );

  totalStaked = totalStaked.isLessThan(0.0001) ? new BigNumber(0) : totalStaked;

  const totalStakedFixed = totalStaked.toFixed(4);
  const totalDeposited = (
    totalStaked.isEqualTo(0) ? 0 : vault.depositedTokens
  )?.toFixed(4);

  const totalRewarded = (
    totalStaked.isEqualTo(0) ? 0 : vault.totalRewards
  )?.toFixed(4);

  return (
    <>
      <RemoveStakeModal
        isOpen={removeStakeModalIsOpen}
        setIsOpen={setRemoveStakeModalIsOpen}
        stakedCake={totalStakedFixed}
        poolName={vault.name}
      />
      <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-800 rounded-lg">
        <div className="flex justify-between">
          <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
            {vault.name}
          </p>

          <button onClick={handleRemoveStakeModal} aria-label="Remover Stake">
            <XCircleIcon className="h-5 w-5 text-red-500" />
          </button>
        </div>
        <div className="flex items-end space-x-2 my-6">
          <p
            className={cx(
              "text-5xl text-black dark:text-white font-bold",
              isLoading
                ? "w-36 h-10 inline-block animate-pulse bg-gray-300 rounded"
                : ""
            )}
          >
            {!isLoading && totalStakedFixed}
          </p>
        </div>
        <div className="dark:text-white">
          <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
            <p>Depositado</p>
            <div
              className={cx(
                "flex items-end text-xs",
                isLoading
                  ? "w-10 h-4 inline-block animate-pulse bg-gray-300 rounded"
                  : ""
              )}
            >
              {!isLoading && totalDeposited}
            </div>
          </div>
          <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
            <p>Ganho</p>
            <div
              className={cx(
                "flex items-end text-xs",
                isLoading
                  ? "w-10 h-4 inline-block animate-pulse bg-gray-300 rounded"
                  : ""
              )}
            >
              {!isLoading && totalRewarded}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
