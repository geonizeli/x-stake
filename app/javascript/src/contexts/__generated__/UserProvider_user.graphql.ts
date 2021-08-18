/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserProvider_user = {
    readonly firstName: string;
    readonly walletAddress: string | null;
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
      "kind": "ScalarField",
      "name": "walletAddress",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'ef997d2646b4d39178c6f3318509a7cb';
export default node;
