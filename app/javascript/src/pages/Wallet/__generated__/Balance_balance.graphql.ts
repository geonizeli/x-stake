/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Balance_balance = {
    readonly amount: string;
    readonly " $refType": "Balance_balance";
};
export type Balance_balance$data = Balance_balance;
export type Balance_balance$key = {
    readonly " $data"?: Balance_balance$data;
    readonly " $fragmentRefs": FragmentRefs<"Balance_balance">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Balance_balance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "amount",
      "storageKey": null
    }
  ],
  "type": "Balance",
  "abstractKey": null
};
(node as any).hash = '3f420063f1e6ebfcd91bd05b7bbb492a';
export default node;
