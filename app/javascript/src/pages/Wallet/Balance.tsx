import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useFragment } from "react-relay";

import { getCurrencyLogo } from "../../utils/getCurrencyLogo";
import type { Balance_balance$key } from "./__generated__/Balance_balance.graphql";

type Props = {
  balancesRef: Balance_balance$key;
};
export const Balance: FC<Props> = ({ balancesRef }) => {
  const node = useFragment<Balance_balance$key>(
    graphql`
      fragment Balance_balance on Balance {
        amount
      }
    `,
    balancesRef
  );

  if (!node) return null;

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Moeda
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Saldo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
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
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {node.amount}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
