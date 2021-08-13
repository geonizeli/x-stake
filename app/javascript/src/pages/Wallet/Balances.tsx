import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useFragment } from "react-relay";

import { getCurrencyLogo } from "../../utils/getCurrencyLogo";
import type { Balances_balances$key } from "./__generated__/Balances_balances.graphql";

type Props = {
  balancesRef: Balances_balances$key;
};
export const Balances: FC<Props> = ({ balancesRef }) => {
  const { edges } = useFragment<Balances_balances$key>(
    graphql`
      fragment Balances_balances on BalanceConnection {
        edges {
          node {
            id
            amount
            currency {
              name
            }
          }
        }
      }
    `,
    balancesRef
  );

  if (!edges.length) return null;

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
            {edges.map(({ node }) => {
              return (
                <tr key={node.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          alt={`${node.currency.name} icon`}
                          src={getCurrencyLogo(node.currency.name)}
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {node.currency.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {node.amount}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
