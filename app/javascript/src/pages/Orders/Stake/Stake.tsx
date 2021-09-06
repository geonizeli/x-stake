import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useLazyLoadQuery } from "react-relay";
import cx from "classnames";

import { getStatusTextAndColors } from "../utils/processStatus";
import type { StakeQuery } from "./__generated__/StakeQuery.graphql";
import { Messages } from "../../../messages";
import { Table, TableRow } from "../../../components";

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
            <Table columns={["Pool", "Montante", "Criado em", "Status"]}>
              {stakeOrders.edges.map(({ node }) => {
                const [label, textStyles, bgStyles] = getStatusTextAndColors(
                  node.status
                );

                const status = (
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
                );

                return (
                  <TableRow
                    key={node.id}
                    items={[
                      node.poolName,
                      node.amount,
                      new Date(node.createdAt as string).toLocaleTimeString(),
                      status,
                    ]}
                  />
                );
              })}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
