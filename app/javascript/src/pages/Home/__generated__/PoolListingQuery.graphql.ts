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
          name
          id
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
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v2 = {
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Currency",
                    "kind": "LinkedField",
                    "name": "currency",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v1/*: any*/)
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Currency",
                    "kind": "LinkedField",
                    "name": "currency",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
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
    ]
  },
  "params": {
    "cacheID": "6abf5e963429e49993af50df156f8e1c",
    "id": null,
    "metadata": {},
    "name": "PoolListingQuery",
    "operationKind": "query",
    "text": "query PoolListingQuery {\n  balances {\n    edges {\n      node {\n        currency {\n          name\n          id\n        }\n        amount\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4fefb238e24b79198799686599255e6c';
export default node;
