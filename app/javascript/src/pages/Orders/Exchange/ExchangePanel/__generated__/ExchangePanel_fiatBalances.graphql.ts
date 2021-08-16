/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExchangePanel_fiatBalances = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly amountCents: number;
        };
    }>;
    readonly " $refType": "ExchangePanel_fiatBalances";
};
export type ExchangePanel_fiatBalances$data = ExchangePanel_fiatBalances;
export type ExchangePanel_fiatBalances$key = {
    readonly " $data"?: ExchangePanel_fiatBalances$data;
    readonly " $fragmentRefs": FragmentRefs<"ExchangePanel_fiatBalances">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExchangePanel_fiatBalances",
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
(node as any).hash = '14b79d15c8353d856f3e74bb7c181cf7';
export default node;
