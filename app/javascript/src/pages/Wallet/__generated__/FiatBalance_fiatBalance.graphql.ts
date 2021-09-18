/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FiatBalance_fiatBalance = {
    readonly fiatBalance: {
        readonly amountCents: number;
        readonly amountCurrency: string;
    };
    readonly " $refType": "FiatBalance_fiatBalance";
};
export type FiatBalance_fiatBalance$data = FiatBalance_fiatBalance;
export type FiatBalance_fiatBalance$key = {
    readonly " $data"?: FiatBalance_fiatBalance$data;
    readonly " $fragmentRefs": FragmentRefs<"FiatBalance_fiatBalance">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FiatBalance_fiatBalance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FiatBalance",
      "kind": "LinkedField",
      "name": "fiatBalance",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "amountCents",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "amountCurrency",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '4371bbd59e9a50e7f32aa65bf982c19e';
export default node;
