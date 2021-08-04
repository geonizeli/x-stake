import React from "react";

import { pools } from "../constants/Pools";

export const PoolListing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-8 py-4 -mt-16 overflow-x-hidden">
      {pools
        .filter((pool) => !pool.isFinished)
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
        .map((pool) => (
          <div
            key={pool.sousId}
            id={pool.sousId.toString()}
            className="flex items-center w-full h-auto bg-white px-16 p-4 rounded-xl shadow flex-col relative z-0 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div
              className="box-border h-full w-full absolute left-0 top-0 rounded-xl opacity-20 filter blur-2xl bg-cover"
              style={{
                backgroundImage: `url('https://pancakeswap.finance/images/tokens/${pool.earningToken.address["56"]}.svg')`,
                backgroundPositionX: "50%",
                backgroundPositionY: "50%",
                backgroundSize: "125%",
                zIndex: -1,
              }}
            />
            <img
              className="shadow-xl rounded-full w-24"
              src={`https://pancakeswap.finance/images/tokens/${pool.earningToken.address["56"]}.svg`}
              alt={`${pool.earningToken.symbol} icon`}
            />
            <div className="mt-4 p-2">
              <p>
                <span className="font-medium">Investir:</span>{" "}
                {pool.stakingToken.symbol}
              </p>
              <p>
                <span className="font-medium">Receber:</span>{" "}
                {pool.earningToken.symbol}
              </p>
              <div className="flex items-center">
                <span className="font-medium mr-1">Rendimento:</span>
                <div className="w-10 h-5 inline-block animate-pulse bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
