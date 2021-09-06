import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useLazyLoadQuery } from "react-relay";
import cs from "classnames";

import { Table, TableRow } from "../../../components";
import type { DepositQuery } from "./__generated__/DepositQuery.graphql";
import { getStatusTextAndColors } from "../utils/processStatus";
import { centsToUnit } from "../../../utils/fiatMoney";
import { Messages } from "../../../messages";

export const Deposit: FC = () => {
  const { depositOrders } = useLazyLoadQuery<DepositQuery>(
    graphql`
      query DepositQuery {
        depositOrders {
          edges {
            node {
              id
              status
              createdAt
              paidAmountCents
              receivedAmountCents
            }
          }
        }
      }
    `,
    {}
  );

  if (!depositOrders.edges.length)
    return <Messages.NoHistory historyName="depósito" />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Table
              columns={[
                "Montante pago",
                "Montante recebido",
                "Criado em",
                "Status",
              ]}
            >
              {depositOrders.edges.map(({ node }) => {
                const [label, textStyles, bgStyles] = getStatusTextAndColors(
                  node.status
                );

                const status = (
                  <span
                    className={cs(
                      "relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight",
                      textStyles
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cs(
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
                      `${centsToUnit(node.paidAmountCents)} BRL`,
                      `${centsToUnit(node.receivedAmountCents)} BRL`,
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
