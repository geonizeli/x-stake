/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateExchangeOrderModal_fiatBalances = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly amountCents: number;
        };
    }>;
    readonly " $refType": "CreateExchangeOrderModal_fiatBalances";
};
export type CreateExchangeOrderModal_fiatBalances$data = CreateExchangeOrderModal_fiatBalances;
export type CreateExchangeOrderModal_fiatBalances$key = {
    readonly " $data"?: CreateExchangeOrderModal_fiatBalances$data;
    readonly " $fragmentRefs": FragmentRefs<"CreateExchangeOrderModal_fiatBalances">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateExchangeOrderModal_fiatBalances",
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
(node as any).hash = 'b3a734bd9e34e02aacfa42b6b95776a5';
export default node;
