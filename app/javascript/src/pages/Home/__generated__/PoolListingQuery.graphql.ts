/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PoolListingQueryVariables = {};
export type PoolListingQueryResponse = {
    readonly balances: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly currency: {
                    readonly id: string;
                    readonly name: string;
                };
                readonly amount: string;
            };
        }>;
    };
};
export type PoolListingQuery = {
    readonly response: PoolListingQueryResponse;
    readonly variables: PoolListingQueryVariables;
};



/*
query PoolListingQuery {
  balances {
    edges {
      node {
        currency {
          id
          name
        }
        amount
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "Currency",
  "kind": "LinkedField",
  "name": "currency",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
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
        "concreteType": "BalanceConnection",
        "kind": "LinkedField",
        "name": "balances",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BalanceEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Balance",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
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
        "concreteType": "BalanceConnection",
        "kind": "LinkedField",
        "name": "balances",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BalanceEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Balance",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "06c9467183eb0e89329ec630a8cc4880",
    "id": null,
    "metadata": {},
    "name": "PoolListingQuery",
    "operationKind": "query",
    "text": "query PoolListingQuery {\n  balances {\n    edges {\n      node {\n        currency {\n          id\n          name\n        }\n        amount\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '570efc1d3b5dac09303b8692d6830bb2';
export default node;