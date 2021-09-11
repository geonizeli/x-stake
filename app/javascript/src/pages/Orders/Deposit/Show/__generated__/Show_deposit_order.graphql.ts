/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING";
export type Show_deposit_order = {
    readonly id: string;
    readonly transactionId: string;
    readonly paidAmountCents: number;
    readonly receivedAmountCents: number;
    readonly status: ProcessStatus;
    readonly createdAt: unknown;
    readonly " $refType": "Show_deposit_order";
};
export type Show_deposit_order$data = Show_deposit_order;
export type Show_deposit_order$key = {
    readonly " $data"?: Show_deposit_order$data;
    readonly " $fragmentRefs": FragmentRefs<"Show_deposit_order">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Show_deposit_order",
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
      "name": "transactionId",
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
    }
  ],
  "type": "DepositOrder",
  "abstractKey": null
};
(node as any).hash = '7bda3158834b0532ddabf9da61984049';
export default node;
