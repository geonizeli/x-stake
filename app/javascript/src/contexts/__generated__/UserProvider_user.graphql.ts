/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserProvider_user = {
    readonly firstName: string;
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
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '352cdd208485d062f3f7c2e22e287a99';
export default node;
