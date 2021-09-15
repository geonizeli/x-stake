import React from "react";

import { Pool } from "./Pool";
import { Spinner } from "../../components";
import { usePoolListing } from "./hooks";

export const PoolListing = () => {
  const { isLoading, validPools } = usePoolListing();

  // TODO<wallet>: puxar valor da wallet
  const balance = "0";

  if (isLoading && !validPools.length) {
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
