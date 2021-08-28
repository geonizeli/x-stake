import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useLazyLoadQuery } from "react-relay";

import { useCurrentUser } from "../../contexts/UserProvider";
import { Messages } from "../../messages";
import { Balance } from "./Balance";
import { FiatBalance } from "./FiatBalance";
import type { WalletQuery } from "./__generated__/WalletQuery.graphql";

export const Wallet: FC = () => {
  const { isAuthenticated } = useCurrentUser();
  const { currentUser } = useLazyLoadQuery<WalletQuery>(
    graphql`
      query WalletQuery {
        currentUser {
          fiatBalance {
            ...FiatBalance_fiatBalance
          }
          balance {
            ...Balance_balance
          }
        }
      }
    `,
    {}
  );

  if (!isAuthenticated || !currentUser) return <Messages.Unauthenticated />;

  return (
    <div className="flex flex-col h-full w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8">
          <FiatBalance fiatBalancesRef={currentUser.fiatBalance} />
          <Balance balancesRef={currentUser.balance} />
        </div>
      </div>
    </div>
  );
};
