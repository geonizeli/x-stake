import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useFragment } from "react-relay";

import { Table, TableRow } from "../../components";
import { tokens } from "../../constants/pancake/Tokens";
import { useBusdExpectation } from "../../hooks/useBusdExpectation";
import { formatCake } from "../../utils/cake";
import { getCurrencyLogo } from "../../utils/getCurrencyLogo";
import type { Balance_wallet$key } from "./__generated__/Balance_wallet.graphql";

type Props = {
  userRef: Balance_wallet$key;
};

export const Balance: FC<Props> = ({ userRef }) => {
  const { wallet } = useFragment<Balance_wallet$key>(
    graphql`
      fragment Balance_wallet on User {
        wallet {
          cakeBalance
        }
      }
    `,
    userRef
  );

  const cakeBalance = formatCake(wallet.cakeBalance);

  const { total } = useBusdExpectation(
    tokens.cake,
    parseFloat(wallet.cakeBalance)
  );

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <Table columns={["Moeda", "Saldo", "Expectativa em Dólar"]}>
          <TableRow
            items={[
              <div className="flex items-center" key="pancake coin">
                <div className="flex-shrink-0">
                  <img
                    alt="CAKE icon"
                    src={getCurrencyLogo("CAKE")}
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">CAKE</p>
                </div>
              </div>,
              cakeBalance,
              total,
            ]}
          />
        </Table>
      </div>
    </div>
  );
};
