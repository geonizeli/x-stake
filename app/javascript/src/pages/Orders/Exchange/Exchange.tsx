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
        fiatBalances {
          ...ExchangePanel_fiatBalances
        }
        balances {
          ...ExchangePanel_balances
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
      <ExchangePanel
        balancesRefs={data.balances}
        fiatBalancesRefs={data.fiatBalances}
      />

      <ExchangeHistory
        sellCryptoOrdersRefs={data.sellCryptoOrders}
        buyCryptoOrdersRefs={data.buyCryptoOrders}
      />
    </div>
  );
};
