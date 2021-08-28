/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FiatBalance_fiatBalance = {
    readonly amountCents: number;
    readonly amountCurrency: string;
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
  "type": "FiatBalance",
  "abstractKey": null
};
(node as any).hash = 'dc28e4dca104c7d25465a30412661af2';
export default node;
