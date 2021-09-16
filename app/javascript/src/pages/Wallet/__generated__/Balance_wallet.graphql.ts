/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Balance_wallet = {
    readonly wallet: {
        readonly cakeBalance: string;
    };
    readonly " $refType": "Balance_wallet";
};
export type Balance_wallet$data = Balance_wallet;
export type Balance_wallet$key = {
    readonly " $data"?: Balance_wallet$data;
    readonly " $fragmentRefs": FragmentRefs<"Balance_wallet">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Balance_wallet",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Wallet",
      "kind": "LinkedField",
      "name": "wallet",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cakeBalance",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '27ddb42954aa66b033735eeea5746516';
export default node;
