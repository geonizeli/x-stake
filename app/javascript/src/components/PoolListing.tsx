import React from "react";

import { pools } from "../constants/Pools";
import { Pool } from "./Pool";

export const PoolListing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-8 py-4 -mt-16 overflow-x-hidden">
      {pools
        .filter((pool) => !pool.isFinished)
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
        .map((pool) => (
          <Pool key={pool.sousId} pool={pool} />
        ))}
    </div>
  );
};
