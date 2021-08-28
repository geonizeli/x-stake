import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useLazyLoadQuery } from "react-relay";

import { pools } from "../../constants/Pools";
import { Pool } from "./Pool";
import type { PoolListingQuery } from "./__generated__/PoolListingQuery.graphql";

export const PoolListing = () => {
  const { balances } = useLazyLoadQuery<PoolListingQuery>(
    graphql`
      query PoolListingQuery {
        balances {
          edges {
            node {
              currency {
                name
              }
              amount
            }
          }
        }
      }
    `,
    {}
  );

  const cakeBalance = balances.edges.find(
    (edge) => edge.node.currency.name === "CAKE"
  )?.node;

  const balance = cakeBalance?.amount ?? "0";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-8 py-4 -mt-16 overflow-x-hidden">
      {pools
        .filter((pool) => !pool.isFinished)
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
        .map((pool) => (
          <Pool key={pool.sousId} pool={pool} balance={balance} />
        ))}
    </div>
  );
};
