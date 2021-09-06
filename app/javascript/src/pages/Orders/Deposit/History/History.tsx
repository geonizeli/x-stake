import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React, { useState } from "react";
import cs from "classnames";
import { useFragment } from "react-relay";

import { Table, TableRow } from "../../../../components";
import { getStatusTextAndColors } from "../../utils/processStatus";
import { centsToUnit } from "../../../../utils/fiatMoney";
import type { History_depositOrders$key } from "./__generated__/History_depositOrders.graphql";
import { Show } from "../Show";

type Props = {
  ordersRef: History_depositOrders$key;
};

export const History: FC<Props> = ({ ordersRef }) => {
  const [openOrderId, setOpenOrderId] = useState<string | null>(null);

  const { edges } = useFragment<History_depositOrders$key>(
    graphql`
      fragment History_depositOrders on DepositOrderConnection {
        edges {
          node {
            id
            status
            createdAt
            paidAmountCents
            receivedAmountCents
            ...Show_deposit_order
          }
        }
      }
    `,
    ordersRef
  );

  const openOrder = edges.find(({ node }) => node.id === openOrderId);
  const onClose = () => setOpenOrderId(null);

  return (
    <>
      {openOrder && <Show orderRef={openOrder.node} onClose={onClose} />}
      <Table
        columns={["Montante pago", "Montante recebido", "Criado em", "Status"]}
      >
        {edges.map(({ node }) => {
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
              onClick={(orderId) => setOpenOrderId(orderId)}
              id={node.id}
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
    </>
  );
};
