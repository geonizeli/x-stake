import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useLazyLoadQuery } from "react-relay";

import type { DepositQuery } from "./__generated__/DepositQuery.graphql";
import { Messages } from "../../../messages";
import { History } from "./History";
import { Create } from "./Create";
import { DepositProvider, useDepositContext } from "./DepositProvider";
import { Show } from "./Show";
import { useCurrentUser } from "../../../contexts/UserProvider";

const Component: FC = () => {
  const { isAuthenticated } = useCurrentUser();
  const { fetchKey } = useDepositContext();

  const { depositOrders } = useLazyLoadQuery<DepositQuery>(
    graphql`
      query DepositQuery {
        depositOrders {
          totalCount
          ...History_depositOrders
        }
      }
    `,
    {},
    {
      fetchKey,
      fetchPolicy: "network-only",
    }
  );

  if (!isAuthenticated) return <Messages.Unauthenticated />;

  if (!depositOrders.totalCount)
    return (
      <Messages.NoHistory historyName="depósito">
        <Create />
      </Messages.NoHistory>
    );

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <Create />
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <History ordersRef={depositOrders} />
          </div>
        </div>
      </div>
    </>
  );
};

export const Deposit: FC = () => {
  return (
    <DepositProvider>
      <Show />
      <Component />
    </DepositProvider>
  );
};
