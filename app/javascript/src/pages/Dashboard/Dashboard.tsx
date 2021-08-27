import type { FC } from "react";
import React from "react";
import useSWR from "swr";

import { useCurrentUser } from "../../contexts/UserProvider";
import type {
  Vault as VaultType,
  YieldwatchResponse,
} from "../../types/yieldwatch";
import { Vault } from "./Vault";

const exampleVault: Partial<VaultType> = {
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
      <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vaults?.map((vault) => (
          <Vault key={vault.name} isLoading={isLoading} vault={vault} />
        ))}
      </div>
    </div>
  );
};
