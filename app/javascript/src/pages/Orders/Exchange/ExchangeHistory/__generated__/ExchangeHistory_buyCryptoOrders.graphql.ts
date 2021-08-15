/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING" | "%future added value";
export type ExchangeHistory_buyCryptoOrders = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly status: ProcessStatus;
            readonly createdAt: unknown;
            readonly paidAmountCents: number;
            readonly receivedAmount: string | null;
            readonly currency: {
                readonly name: string;
            };
            readonly __typename: string;
        };
    }>;
    readonly " $refType": "ExchangeHistory_buyCryptoOrders";
};
export type ExchangeHistory_buyCryptoOrders$data = ExchangeHistory_buyCryptoOrders;
export type ExchangeHistory_buyCryptoOrders$key = {
    readonly " $data"?: ExchangeHistory_buyCryptoOrders$data;
    readonly " $fragmentRefs": FragmentRefs<"ExchangeHistory_buyCryptoOrders">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExchangeHistory_buyCryptoOrders",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BuyCryptoOrderEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "BuyCryptoOrder",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "status",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "createdAt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "paidAmountCents",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "receivedAmount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Currency",
              "kind": "LinkedField",
              "name": "currency",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "BuyCryptoOrderConnection",
  "abstractKey": null
};
(node as any).hash = 'da0e93160594d0e07defe123a9bd755b';
export default node;
