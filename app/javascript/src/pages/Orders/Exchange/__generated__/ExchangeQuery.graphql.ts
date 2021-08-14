/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ExchangeQueryVariables = {};
export type ExchangeQueryResponse = {
    readonly fiatBalances: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly amountCents: number;
                readonly amountCurrency: string;
            };
        }>;
    };
    readonly balances: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly amount: string;
                readonly currency: {
                    readonly name: string;
                };
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
        id
        amountCents
        amountCurrency
      }
    }
  }
  balances {
    edges {
      node {
        id
        amount
        currency {
          name
          id
        }
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "amountCents",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "amountCurrency",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExchangeQuery",
    "selections": [
      (v1/*: any*/),
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
                  (v0/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Currency",
                    "kind": "LinkedField",
                    "name": "currency",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/)
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
      (v1/*: any*/),
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
                  (v0/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Currency",
                    "kind": "LinkedField",
                    "name": "currency",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7a42b2fc93f97505aaaf21867de36321",
    "id": null,
    "metadata": {},
    "name": "ExchangeQuery",
    "operationKind": "query",
    "text": "query ExchangeQuery {\n  fiatBalances {\n    edges {\n      node {\n        id\n        amountCents\n        amountCurrency\n      }\n    }\n  }\n  balances {\n    edges {\n      node {\n        id\n        amount\n        currency {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '80cac44f2e6288dfb573d0037b7d4148';
export default node;
