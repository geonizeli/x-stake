/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING" | "%future added value";
export type SellOrder_order = {
    readonly id: string;
    readonly status: ProcessStatus;
    readonly paidAmount: string;
    readonly receivedAmountCents: number | null;
    readonly createdAt: unknown;
    readonly __typename: "SellCryptoOrder";
    readonly " $refType": "SellOrder_order";
};
export type SellOrder_order$data = SellOrder_order;
export type SellOrder_order$key = {
    readonly " $data"?: SellOrder_order$data;
    readonly " $fragmentRefs": FragmentRefs<"SellOrder_order">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SellOrder_order",
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
  "type": "SellCryptoOrder",
  "abstractKey": null
};
(node as any).hash = 'f621be85ef9b711e1c720d4fc07187c7';
export default node;
