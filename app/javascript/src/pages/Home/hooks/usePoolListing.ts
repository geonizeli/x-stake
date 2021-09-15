import { useEffect, useState } from "react";
import { ethers } from "ethers";

import { usePersistedState } from "../../../hooks/usePersistedState";
import type { PoolConfig } from "../../../types";
import sousChef from "../../../abi/sousChef.json";
import { useBsc } from "../../../contexts/BscProvider";
import { unfinishedPools } from "../../../constants/Pools";
import { getEndBlock } from "../../../utils/getEndBlock";
import { notEmpty } from "../../../utils/notEmpty";

export const usePoolListing = () => {
  const { provider } = useBsc();

  const [pools, setPools] = usePersistedState<PoolConfig[]>(
    "validPools",
    [],
    1200000 // 20 minutes
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (pools.length) return;

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
      ).then((validPools) => {
        setIsLoading(false);
        setPools(validPools.filter(notEmpty));
      });
    })();
  }, [provider, setPools, pools.length]);

  return {
    isLoading,
    validPools: pools,
  };
};
