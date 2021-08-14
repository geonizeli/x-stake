/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ExchangeQueryVariables = {};
export type ExchangeQueryResponse = {
    readonly fiatBalances: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly amountCents: number;
            };
        }>;
    };
    readonly balances: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly amount: string;
            };
        }>;
    };
};
export type ExchangeQuery = {
    readonly response: ExchangeQueryResponse;
    readonly variables: ExchangeQueryVariables;
};



/*
query ExchangeQuery {
  fiatBalances {
    edges {
      node {
        amountCents
        id
      }
    }
  }
  balances {
    edges {
      node {
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
  "name": "amountCents",
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
    "name": "ExchangeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FiatBalanceConnection",
        "kind": "LinkedField",
        "name": "fiatBalances",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FiatBalanceEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FiatBalance",
                "kind": "LinkedField",
                "name": "node",
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
        "storageKey": null
      },
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
    "name": "ExchangeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FiatBalanceConnection",
        "kind": "LinkedField",
        "name": "fiatBalances",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FiatBalanceEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FiatBalance",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
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
    ]
  },
  "params": {
    "cacheID": "bb1b8283beba2daf38bacec716816383",
    "id": null,
    "metadata": {},
    "name": "ExchangeQuery",
    "operationKind": "query",
    "text": "query ExchangeQuery {\n  fiatBalances {\n    edges {\n      node {\n        amountCents\n        id\n      }\n    }\n  }\n  balances {\n    edges {\n      node {\n        amount\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '517d3bf7bc6330021f8eb615e78417f5';
export default node;
