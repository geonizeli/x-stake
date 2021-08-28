/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExchangePanel_fiatBalances = {
    readonly amountCents: number;
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
      "kind": "ScalarField",
      "name": "amountCents",
      "storageKey": null
    }
  ],
  "type": "FiatBalance",
  "abstractKey": null
};
(node as any).hash = '9f9bd030f967a665c247facbf641b760';
export default node;
