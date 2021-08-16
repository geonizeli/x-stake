/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExchangePanel_balances = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly amount: string;
            readonly currency: {
                readonly id: string;
            };
        };
    }>;
    readonly " $refType": "ExchangePanel_balances";
};
export type ExchangePanel_balances$data = ExchangePanel_balances;
export type ExchangePanel_balances$key = {
    readonly " $data"?: ExchangePanel_balances$data;
    readonly " $fragmentRefs": FragmentRefs<"ExchangePanel_balances">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExchangePanel_balances",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BalanceEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Balance",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "amount",
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
                  "name": "id",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "BalanceConnection",
  "abstractKey": null
};
(node as any).hash = '3be851ad99a353609459a7edc960f272';
export default node;
