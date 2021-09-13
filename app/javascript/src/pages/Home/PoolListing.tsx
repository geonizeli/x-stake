import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { unfinishedPools } from "../../constants/Pools";
import { useBsc } from "../../contexts/BscProvider";
import type { PoolConfig } from "../../types";
import { Pool } from "./Pool";
import sousChef from "../../abi/sousChef.json";
import { getEndBlock } from "../../utils/getEndBlock";
import { notEmpty } from "../../utils/notEmpty";
import { Spinner } from "../../components";
import { usePersistedState } from "../../hooks/usePersistedState";

export const PoolListing = () => {
  const { provider } = useBsc();
  const [validPools, setValidPools] = usePersistedState<PoolConfig[]>(
    "validPools",
    [],
    1200000 // 20 minutes
  );

  const [isLoadingPools, setIsLoadingPools] = useState(true);

  // TODO<wallet>: puxar valor da wallet
  const balance = "0";

  useEffect(() => {
    (async () => {
      if (validPools.length) return;

      const blockNumber = await provider.getBlockNumber();

      const getChef = (pool: PoolConfig) => {
        return new ethers.Contract(
          pool.contractAddress[56],
          new ethers.utils.Interface(sousChef),
          provider
        );
      };

      await Promise.all(
        unfinishedPools.map(async (pool) => {
          if (pool.sousId === 0) {
            return pool;
          }

          try {
            const chef = getChef(pool);
            const endBlock = await getEndBlock(chef);

            if (endBlock >= blockNumber) {
              return pool;
            }
          } catch (e) {
            console.error(e);
          }
        })
      ).then((pools) => {
        setIsLoadingPools(false);
        setValidPools(pools.filter(notEmpty));
      });
    })();
  }, [provider, setValidPools, validPools.length]);

  if (isLoadingPools && !validPools.length) {
    return (
      <div className="w-full grid place-items-center mt-12">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-8 py-4 -mt-16 overflow-x-hidden">
      {validPools
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
        .map((pool) => (
          <Pool key={pool.sousId} pool={pool} balance={balance} />
        ))}
    </div>
  );
};
