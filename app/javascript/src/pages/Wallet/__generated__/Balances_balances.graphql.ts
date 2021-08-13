/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Balances_balances = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly amount: string;
            readonly currency: {
                readonly name: string;
            };
        };
    }>;
    readonly " $refType": "Balances_balances";
};
export type Balances_balances$data = Balances_balances;
export type Balances_balances$key = {
    readonly " $data"?: Balances_balances$data;
    readonly " $fragmentRefs": FragmentRefs<"Balances_balances">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Balances_balances",
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
              "name": "id",
              "storageKey": null
            },
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
                  "name": "name",
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
(node as any).hash = 'f42e01739ec72a194e05843169435d96';
export default node;
