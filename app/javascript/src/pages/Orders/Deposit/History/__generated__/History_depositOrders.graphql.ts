/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING" | "%future added value";
export type History_depositOrders = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly status: ProcessStatus;
            readonly createdAt: unknown;
            readonly paidAmountCents: number;
            readonly receivedAmountCents: number;
            readonly " $fragmentRefs": FragmentRefs<"Show_deposit_order">;
        };
    }>;
    readonly " $refType": "History_depositOrders";
};
export type History_depositOrders$data = History_depositOrders;
export type History_depositOrders$key = {
    readonly " $data"?: History_depositOrders$data;
    readonly " $fragmentRefs": FragmentRefs<"History_depositOrders">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "History_depositOrders",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "DepositOrderEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DepositOrder",
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
              "name": "receivedAmountCents",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Show_deposit_order"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DepositOrderConnection",
  "abstractKey": null
};
(node as any).hash = 'f810eed214d3beb7c443588e670d8f39';
export default node;
