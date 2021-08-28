/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PoolListingQueryVariables = {};
export type PoolListingQueryResponse = {
    readonly currentUser: {
        readonly balance: {
            readonly amount: string;
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
    balance {
      amount
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Balance",
            "kind": "LinkedField",
            "name": "balance",
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          }
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Balance",
            "kind": "LinkedField",
            "name": "balance",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6af4091073903ead7eb057e9f245a32c",
    "id": null,
    "metadata": {},
    "name": "PoolListingQuery",
    "operationKind": "query",
    "text": "query PoolListingQuery {\n  currentUser {\n    balance {\n      amount\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e296b5abac1f659b33d8c77522fbfc55';
export default node;
