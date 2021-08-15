/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateExchangeOrderModal_balances = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly amount: string;
        };
    }>;
    readonly " $refType": "CreateExchangeOrderModal_balances";
};
export type CreateExchangeOrderModal_balances$data = CreateExchangeOrderModal_balances;
export type CreateExchangeOrderModal_balances$key = {
    readonly " $data"?: CreateExchangeOrderModal_balances$data;
    readonly " $fragmentRefs": FragmentRefs<"CreateExchangeOrderModal_balances">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateExchangeOrderModal_balances",
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
(node as any).hash = '42aad1bd63f1135b4d99ec236cd945b5';
export default node;
