/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FiatBalances_fiatBalances = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly amountCents: number;
            readonly amountCurrency: string;
        };
    }>;
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
      "concreteType": "FiatBalanceEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FiatBalance",
          "kind": "LinkedField",
          "name": "node",
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
      "storageKey": null
    }
  ],
  "type": "FiatBalanceConnection",
  "abstractKey": null
};
(node as any).hash = 'a1454d1a8afc3cffb17cbfbe9e3555f7';
export default node;
