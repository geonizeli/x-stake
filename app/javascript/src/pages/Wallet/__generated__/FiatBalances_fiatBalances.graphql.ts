/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FiatBalances_fiatBalances = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly amountCents: number;
        readonly amountCurrency: string;
    } | null> | null;
    readonly " $refType": "FiatBalances_fiatBalances";
};
export type FiatBalances_fiatBalances$data = FiatBalances_fiatBalances;
export type FiatBalances_fiatBalances$key = {
    readonly " $data"?: FiatBalances_fiatBalances$data;
    readonly " $fragmentRefs": FragmentRefs<"FiatBalances_fiatBalances">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FiatBalances_fiatBalances",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FiatBalance",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
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
  "type": "FiatBalanceConnection",
  "abstractKey": null
};
(node as any).hash = '0584f36abe6ca6f8612b8c593c4cfb6d';
export default node;
