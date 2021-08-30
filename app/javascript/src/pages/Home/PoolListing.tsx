import { graphql } from "babel-plugin-relay/macro";
import React, { useEffect, useMemo, useState } from "react";
import { useLazyLoadQuery } from "react-relay";

import { pools } from "../../constants/Pools";
import { useBsc } from "../../contexts/BscProvider";
import { PoolConfig } from "../../types";
import { Pool } from "./Pool";
import { ethers } from "ethers";
import sousChef from "../../abi/sousChef.json"
import { getEndBlock } from "../../utils/getEndBlock";
import type { PoolListingQuery } from "./__generated__/PoolListingQuery.graphql";

export const PoolListing = () => {
  const {
    provider
  } = useBsc();
  const [validPools, setValidPools] = useState<PoolConfig[]>([])

  const { currentUser } = useLazyLoadQuery<PoolListingQuery>(
    graphql`
      query PoolListingQuery {
        currentUser {
          balance {
            amount
          }
        }
      }
    `,
    {}
  );

  const balance = currentUser?.balance.amount ?? "0";

  const getChef = (pool: PoolConfig) => {
    return new ethers.Contract(
        pool.contractAddress[56],
        new ethers.utils.Interface(sousChef),
        provider
      );
  }

  useEffect(() => {
    (async() => {
      const blockNumber = await provider.getBlockNumber()
      console.log(blockNumber)
      const valids: PoolConfig[] = []

      for(let pool of pools) {
        if(pool.sousId === 0) {
          valids.push(pool)
          setValidPools([...valids])
          continue
        }
        try {
          const chef = getChef(pool)
          const endBlock = await getEndBlock(chef)
          if(endBlock >= blockNumber) {
            valids.push(pool)
            setValidPools([...valids])
          }
        } catch(e) {
          console.log(e)
        }
      }
    })()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-8 py-4 -mt-16 overflow-x-hidden">
      {validPools
        .filter((pool) => !pool.isFinished)
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
        .map((pool) => (
          <Pool key={pool.sousId} pool={pool} balance={balance} />
        ))}
    </div>
  );
};
