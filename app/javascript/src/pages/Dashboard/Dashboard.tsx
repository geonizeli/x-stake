import type { FC } from "react";
import React from "react";
import useSWR from "swr";

import { Spinner } from "../../components";
import { useCurrentUser } from "../../contexts/UserProvider";
import { Messages } from "../../messages";
import type { YieldwatchResponse } from "../../types/yieldwatch";
import { VaultCard } from "./VaultCard";

export const Dashbaord: FC = () => {
  const { user, isAuthenticated } = useCurrentUser();
  const { data } = useSWR<YieldwatchResponse>(
    `https://www.yieldwatch.net/api/all/${user?.walletAddress}?platforms=pancake`
  );

  const isLoading = !data;
  const vaults = data?.result?.PancakeSwap?.staking?.vaults;

  if (!isAuthenticated) return <Messages.Unauthenticated />;

  if (isLoading)
    return (
      <div className="w-full grid place-items-center">
        <Spinner />
      </div>
    );

  if (!vaults?.length) return <Messages.NoHistory historyName="Staking" />;

  return (
    <div className="grid place-items-center w-full h-full mt-20">
      <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vaults?.map((vault) => (
          <VaultCard key={vault.name} vault={vault} />
        ))}
      </div>
    </div>
  );
};
