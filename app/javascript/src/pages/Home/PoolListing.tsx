import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { Pool } from "./Pool";
import { Spinner } from "../../components";
import { usePoolListing } from "./hooks";
import type { PoolListingQuery } from "./__generated__/PoolListingQuery.graphql";
import { formatCake } from "../../utils/cake";

export const PoolListing = () => {
  const { isLoading, validPools } = usePoolListing();

  const { currentUser } = useLazyLoadQuery<PoolListingQuery>(
    graphql`
      query PoolListingQuery {
        currentUser {
          wallet {
            cakeBalance
          }
        }
      }
    `,
    {}
  );

  const balance = formatCake(currentUser?.wallet.cakeBalance);

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
