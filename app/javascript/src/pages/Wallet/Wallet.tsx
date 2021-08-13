import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useLazyLoadQuery } from "react-relay";

import { useCurrentUser } from "../../contexts/UserProvider";
import { Messages } from "../../messages";
import { Balances } from "./Balances";
import { FiatBalances } from "./FiatBalances";
import type { WalletQuery } from "./__generated__/WalletQuery.graphql";

export const Wallet: FC = () => {
  const { isAuthenticated } = useCurrentUser();
  const { fiatBalances, balances } = useLazyLoadQuery<WalletQuery>(
    graphql`
      query WalletQuery {
        fiatBalances {
          ...FiatBalances_fiatBalances
        }
        balances {
          ...Balances_balances
        }
      }
    `,
    {}
  );

  if (!isAuthenticated) return <Messages.Unauthenticated />;

  return (
    <div className="flex flex-col h-full w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8">
          <FiatBalances fiatBalancesRef={fiatBalances} />
          <Balances balancesRef={balances} />
        </div>
      </div>
    </div>
  );
};
