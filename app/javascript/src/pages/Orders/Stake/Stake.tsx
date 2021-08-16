import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useLazyLoadQuery } from "react-relay";
import cx from "classnames";

import { getStatusTextAndColors } from "../utils/processStatus";
import type { StakeQuery } from "./__generated__/StakeQuery.graphql";
import { Messages } from "../../../messages";

export const Stake: FC = () => {
  const { stakeOrders } = useLazyLoadQuery<StakeQuery>(
    graphql`
      query StakeQuery {
        stakeOrders {
          edges {
            node {
              id
              poolName
              amount
              createdAt
              status
            }
          }
        }
      }
    `,
    {}
  );

  if (!stakeOrders.edges.length)
    return <Messages.NoHistory historyName="Stake" />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
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
                    Pool
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Montante
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Criado em
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {stakeOrders.edges.map(({ node }) => {
                  const [label, textStyles, bgStyles] = getStatusTextAndColors(
                    node.status
                  );

                  return (
                    <tr key={node.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-nowrap">
                          {node.poolName}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-nowrap">
                          {node.amount}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-nowrap">
                          {new Date(
                            node.createdAt as string
                          ).toLocaleTimeString()}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          className={cx(
                            "relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight",
                            textStyles
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cx(
                              "absolute inset-0 opacity-50 rounded-full",
                              bgStyles
                            )}
                          />
                          <span className="relative">{label}</span>
                        </span>
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
  );
};
