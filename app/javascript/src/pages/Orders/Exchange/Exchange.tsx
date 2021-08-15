/* eslint-disable relay/must-colocate-fragment-spreads */
import { graphql } from "babel-plugin-relay/macro";
import React, { useState } from "react";
import { useLazyLoadQuery } from "react-relay";

import { CreateExchangeOrderModal } from "./CreateExchangeOrderModel";
import { ExchangeHistory } from "./ExchangeHistory";
import type { ExchangeQuery } from "./__generated__/ExchangeQuery.graphql";

export const Exchange = () => {
  const [modelOpen] = useState<boolean>(false);

  const data = useLazyLoadQuery<ExchangeQuery>(
    graphql`
      query ExchangeQuery {
        fiatBalances {
          ...CreateExchangeOrderModal_fiatBalances
        }
        balances {
          ...CreateExchangeOrderModal_balances
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
      <ExchangeHistory
        sellCryptoOrdersRefs={data.sellCryptoOrders}
        buyCryptoOrdersRefs={data.buyCryptoOrders}
      />
      {modelOpen && (
        <CreateExchangeOrderModal
          balancesRefs={data.balances}
          fiatBalancesRefs={data.fiatBalances}
        />
      )}
    </div>
  );
};
