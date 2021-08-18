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
    <div>
      <ul>
        <li>Ganho: {data.result.PancakeSwap.staking.totalUSDValues.yield}</li>
        <li>
          Depositado: {data.result.PancakeSwap.staking.totalUSDValues.deposit}
        </li>
        <li>Total: {data.result.PancakeSwap.staking.totalUSDValues.total}</li>
      </ul>
    </div>
  );
};
