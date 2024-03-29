/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserProvider_user = {
    readonly firstName: string;
    readonly wallet: {
        readonly address: string | null;
    };
    readonly " $refType": "UserProvider_user";
};
export type UserProvider_user$data = UserProvider_user;
export type UserProvider_user$key = {
    readonly " $data"?: UserProvider_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserProvider_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserProvider_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
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
          "name": "address",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '4f6b86f489ce0df288106cd92060b889';
export default node;
