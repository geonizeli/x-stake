import type { FC } from "react";
import React, { useState } from "react";
import cx from "classnames";
import { XCircleIcon } from "@heroicons/react/outline";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import BigNumber from "bignumber.js";

import type { Vault } from "../../../types/yieldwatch";
import { RemoveStakeModal } from "./RemoveStakeModal";
import { formatTokenBalance } from "../../../utils/tokenBalance";
import type { VaultCardQuery } from "./__generated__/VaultCardQuery.graphql";

type VaultProps = {
  vault: Vault;
};

export const VaultCard: FC<VaultProps> = ({ vault }) => {
  const { stakeOrders } = useLazyLoadQuery<VaultCardQuery>(
    graphql`
      query VaultCardQuery(
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
      poolName: vault.name,
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

  const totalDepositedAndRewarded = vault.depositedTokens + vault.totalRewards;

  let totalStaked = BigNumber.sum(
    alreadyOnUnstakeOrder,
    totalDepositedAndRewarded
  );

  totalStaked = totalStaked.isLessThan(0.0001) ? new BigNumber(0) : totalStaked;

  const totalStakedFixed = totalStaked.toFixed(4);
  const totalDeposited = formatTokenBalance(vault.depositedTokens);
  const totalRewarded = formatTokenBalance(vault.totalRewards);

  return (
    <>
      <RemoveStakeModal
        isOpen={removeStakeModalIsOpen}
        setIsOpen={setRemoveStakeModalIsOpen}
        stakedCake={totalStakedFixed}
        poolName={vault.name}
      />
      <div className="shadow-lg px-4 py-6 mb-4 w-full bg-white rounded-lg">
        <div className="flex justify-between">
          <p className="text-sm w-max text-gray-700 font-semibold border-b border-gray-200">
            {vault.name}
          </p>
          <button onClick={handleRemoveStakeModal} aria-label="Remover Stake">
            <XCircleIcon className="h-5 w-5 text-red-500" />
          </button>
        </div>

        <div className="mt-6">
          <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
            <p>Depositado</p>
            <div className={cx("flex items-end text-xs")}>{totalDeposited}</div>
          </div>
          <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
            <p>Ganho</p>
            <div className={cx("flex items-end text-xs")}>{totalRewarded}</div>
          </div>
          <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
            <p>Rendimento</p>
            <div className={cx("flex items-end text-xs whitespace-nowrap")}>
              {`${(vault.poolInfo.apr * 100).toFixed(2)} %`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
