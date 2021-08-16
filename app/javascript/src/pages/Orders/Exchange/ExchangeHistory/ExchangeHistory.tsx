import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React from "react";
import { useFragment } from "react-relay";

import { centsToUnit } from "../../../../utils/fiatMoney";
import type { CryptoExchangeOrderProps } from "./components/CryptoExchangeOrder";
import { CryptoExchangeOrder } from "./components/CryptoExchangeOrder";
import type {
  ExchangeHistory_buyCryptoOrders$key,
  ProcessStatus,
} from "./__generated__/ExchangeHistory_buyCryptoOrders.graphql";
import type { ExchangeHistory_sellCryptoOrders$key } from "./__generated__/ExchangeHistory_sellCryptoOrders.graphql";

type Props = {
  buyCryptoOrdersRefs: ExchangeHistory_buyCryptoOrders$key;
  sellCryptoOrdersRefs: ExchangeHistory_sellCryptoOrders$key;
};

type SellOrBuyOrder = {
  readonly node: {
    readonly id: string;
    readonly status: ProcessStatus;
    readonly paidAmount: string;
    readonly receivedAmountCents: number | null;
    readonly createdAt: unknown;
    readonly paidAmountCents: number;
    readonly receivedAmount: string | null;
    readonly currency: {
      readonly name: string;
    };
    readonly __typename: string;
  };
};

export const ExchangeHistory: FC<Props> = ({
  buyCryptoOrdersRefs,
  sellCryptoOrdersRefs,
}) => {
  const buyCryptoOrders = useFragment<ExchangeHistory_buyCryptoOrders$key>(
    graphql`
      fragment ExchangeHistory_buyCryptoOrders on BuyCryptoOrderConnection {
        edges {
          node {
            id
            status
            createdAt
            paidAmountCents
            receivedAmount
            currency {
              name
            }
            __typename
          }
        }
      }
    `,
    buyCryptoOrdersRefs
  );

  const sellCryptoOrders = useFragment<ExchangeHistory_sellCryptoOrders$key>(
    graphql`
      fragment ExchangeHistory_sellCryptoOrders on SellCryptoOrderConnection {
        edges {
          node {
            id
            status
            paidAmount
            receivedAmountCents
            createdAt
            currency {
              name
            }
            __typename
          }
        }
      }
    `,
    sellCryptoOrdersRefs
  );

  const allResults = [...buyCryptoOrders.edges, ...sellCryptoOrders.edges];

  const allResultsOrdeneds = allResults.sort((item1, item2) => {
    return (
      new Date(item2.node.createdAt as string).getTime() -
      new Date(item1.node.createdAt as string).getTime()
    );
  }) as SellOrBuyOrder[];

  const orderRows: Array<(CryptoExchangeOrderProps & { id: string }) | null> =
    allResultsOrdeneds.map((edge) => {
      const node = edge?.node;

      if (node?.__typename === "SellCryptoOrder") {
        return {
          id: node.id,
          payed: `${node.paidAmount} ${node.currency.name}`,
          received: `${centsToUnit(node.receivedAmountCents)} BRL`,
          createdAt: new Date(node.createdAt as string).toLocaleString(),
          kind: node.__typename,
          status: node.status,
        };
      }

      if (node?.__typename === "BuyCryptoOrder") {
        return {
          id: node.id,
          payed: `${centsToUnit(node.paidAmountCents)} BRL`,
          received: `${node.receivedAmount} ${node.currency.name}`,
          createdAt: new Date(node.createdAt as string).toLocaleString(),
          kind: node.__typename,
          status: node.status,
        };
      }

      return null;
    });

  if (!orderRows.length) return null;

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
                    Valor pago
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Valor recebido
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
                {orderRows.map((order) => {
                  return <CryptoExchangeOrder key={order?.id} {...order} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
