/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING";
export type ExchangeHistory_sellCryptoOrders = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly status: ProcessStatus;
            readonly paidAmount: string;
            readonly receivedAmountCents: number | null;
            readonly createdAt: unknown;
            readonly __typename: string;
        };
    }>;
    readonly " $refType": "ExchangeHistory_sellCryptoOrders";
};
export type ExchangeHistory_sellCryptoOrders$data = ExchangeHistory_sellCryptoOrders;
export type ExchangeHistory_sellCryptoOrders$key = {
    readonly " $data"?: ExchangeHistory_sellCryptoOrders$data;
    readonly " $fragmentRefs": FragmentRefs<"ExchangeHistory_sellCryptoOrders">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExchangeHistory_sellCryptoOrders",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SellCryptoOrderEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SellCryptoOrder",
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
              "name": "paidAmount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "receivedAmountCents",
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
  "type": "SellCryptoOrderConnection",
  "abstractKey": null
};
(node as any).hash = '0a6fbd33935e0dcd241ffa3270f1ea30';
export default node;
