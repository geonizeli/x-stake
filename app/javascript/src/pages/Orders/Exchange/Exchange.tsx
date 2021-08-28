/* eslint-disable relay/must-colocate-fragment-spreads */
import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useLazyLoadQuery } from "react-relay";

import { ExchangePanel } from "./ExchangePanel";
import { ExchangeHistory } from "./ExchangeHistory";
import type { ExchangeQuery } from "./__generated__/ExchangeQuery.graphql";

export const Exchange = () => {
  const data = useLazyLoadQuery<ExchangeQuery>(
    graphql`
      query ExchangeQuery {
        currentUser {
          fiatBalance {
            ...ExchangePanel_fiatBalances
          }
          balance {
            ...ExchangePanel_balances
          }
        }
        buyCryptoOrders {
          ...ExchangeHistory_buyCryptoOrders
        }
        sellCryptoOrders {
          ...ExchangeHistory_sellCryptoOrders
        }
      }
    `,
    {}
  );

  return (
    <div className="w-full">
      {data.currentUser && (
        <ExchangePanel
          balancesRefs={data.currentUser.balance}
          fiatBalancesRefs={data.currentUser.fiatBalance}
        />
      )}

      <ExchangeHistory
        sellCryptoOrdersRefs={data.sellCryptoOrders}
        buyCryptoOrdersRefs={data.buyCryptoOrders}
      />
    </div>
  );
};
