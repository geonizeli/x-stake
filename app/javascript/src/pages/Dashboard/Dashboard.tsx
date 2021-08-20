import type { FC } from "react";
import React from "react";
import useSWR from "swr";
import cx from "classnames";

import { useCurrentUser } from "../../contexts/UserProvider";
import type { Vault, YieldwatchResponse } from "../../types/yieldwatch";

const exampleVault: Partial<Vault> = {
  chainId: 1,
  name: "Cake-Cake Staking",
  depositedTokens: 0,
  totalRewards: 0,
};

export const Dashbaord: FC = () => {
  const { user } = useCurrentUser();

  const { data } = useSWR<YieldwatchResponse>(
    `https://www.yieldwatch.net/api/all/${user?.walletAddress}?platforms=pancake`
  );

  const isLoading = !data;

  const vaults = data?.result?.PancakeSwap?.staking?.vaults ?? [exampleVault];

  return (
    <div className="grid place-items-center w-full h-5 mt-32">
      <div className="inline-block max-w-3xl shadow rounded-lg overflow-hidden">
        {vaults?.map((vault) => (
          <div
            key={vault.chainId}
            className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-800 relative"
          >
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              {vault.name}
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p
                className={cx(
                  "text-5xl text-black dark:text-white font-bold",
                  isLoading
                    ? "w-36 h-10 inline-block animate-pulse bg-gray-300 rounded"
                    : ""
                )}
              >
                {!isLoading &&
                  (
                    (vault.depositedTokens ?? 0) + (vault.totalRewards ?? 0)
                  ).toFixed(4)}
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
                  {!isLoading && vault.depositedTokens?.toFixed(4)}
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
                  {!isLoading && vault.totalRewards?.toFixed(4)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
