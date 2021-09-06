import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useLazyLoadQuery } from "react-relay";

import type { DepositQuery } from "./__generated__/DepositQuery.graphql";
import { Messages } from "../../../messages";
import { History } from "./History";

export const Deposit: FC = () => {
  const { depositOrders } = useLazyLoadQuery<DepositQuery>(
    graphql`
      query DepositQuery {
        depositOrders {
          totalCount
          ...History_depositOrders
        }
      }
    `,
    {}
  );

  if (!depositOrders.totalCount)
    return <Messages.NoHistory historyName="depósito" />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <History ordersRef={depositOrders} />
          </div>
        </div>
      </div>
    </div>
  );
};
