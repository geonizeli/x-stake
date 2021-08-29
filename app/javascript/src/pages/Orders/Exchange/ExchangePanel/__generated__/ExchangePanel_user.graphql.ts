/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExchangePanel_user = {
    readonly fiatBalance: {
        readonly amountCents: number;
    };
    readonly balance: {
        readonly amount: string;
    };
    readonly " $refType": "ExchangePanel_user";
};
export type ExchangePanel_user$data = ExchangePanel_user;
export type ExchangePanel_user$key = {
    readonly " $data"?: ExchangePanel_user$data;
    readonly " $fragmentRefs": FragmentRefs<"ExchangePanel_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExchangePanel_user",
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Balance",
      "kind": "LinkedField",
      "name": "balance",
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
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '2d9248ccbe47532d3f3ac0f21f02a274';
export default node;
