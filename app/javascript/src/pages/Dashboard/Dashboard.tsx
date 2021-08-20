import type { FC } from "react";
import React from "react";
import useSWR from "swr";

import { useCurrentUser } from "../../contexts/UserProvider";
import type { YieldwatchResponse } from "../../types/yieldwatch";

export const Dashbaord: FC = () => {
  const { user } = useCurrentUser();

  const { data } = useSWR<YieldwatchResponse>(
    `https://www.yieldwatch.net/api/all/${user?.walletAddress}?platforms=pancake`
  );

  if (data?.status === "0" || !data) return null;

  return (
    <div className="grid place-items-center w-full h-5 mt-16">
      <div className="inline-block max-w-3xl shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Pool
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Depositado
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Ganho
              </th>
            </tr>
          </thead>
          <tbody>
            {data.result.PancakeSwap.staking.vaults.map((vault) => {
              return (
                <tr key={vault.chainId}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {vault.name}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {vault.depositedTokens.toFixed(4)}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {vault.totalRewards.toFixed(4)}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
