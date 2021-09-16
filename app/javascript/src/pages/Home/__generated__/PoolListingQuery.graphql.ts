/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PoolListingQueryVariables = {};
export type PoolListingQueryResponse = {
    readonly currentUser: {
        readonly wallet: {
            readonly cakeBalance: string;
        };
    } | null;
};
export type PoolListingQuery = {
    readonly response: PoolListingQueryResponse;
    readonly variables: PoolListingQueryVariables;
};



/*
query PoolListingQuery {
  currentUser {
    wallet {
      cakeBalance
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PoolListingQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PoolListingQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "555226365d27590d8236ea1effdf9ddc",
    "id": null,
    "metadata": {},
    "name": "PoolListingQuery",
    "operationKind": "query",
    "text": "query PoolListingQuery {\n  currentUser {\n    wallet {\n      cakeBalance\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'afdc45802c0d92b114c2ebb5c3530ec2';
export default node;
