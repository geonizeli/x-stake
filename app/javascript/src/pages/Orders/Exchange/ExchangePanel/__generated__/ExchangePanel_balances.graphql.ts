/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExchangePanel_balances = {
    readonly amount: string;
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
      "kind": "ScalarField",
      "name": "amount",
      "storageKey": null
    }
  ],
  "type": "Balance",
  "abstractKey": null
};
(node as any).hash = '99736114264996104eaa4907673d9849';
export default node;
