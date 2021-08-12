import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useLazyLoadQuery } from "react-relay";

import { getCurrencyLogo } from "../../utils/getCurrencyLogo";
import type { WalletQuery } from "./__generated__/WalletQuery.graphql";

export const Wallet: FC = () => {
  const { balances } = useLazyLoadQuery<WalletQuery>(
    graphql`
      query WalletQuery {
        balances {
          nodes {
            id
            amount
            currency {
              name
            }
          }
        }
      }
    `,
    {}
  );

  return (
    <div className="flex flex-col h-full w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8">
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
                  {balances.nodes?.map((balance) => {
                    return (
                      <tr key={balance?.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img
                                alt={`${balance?.currency.name} icon`}
                                src={getCurrencyLogo(balance?.currency.name)}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {balance?.currency.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {balance?.amount}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};