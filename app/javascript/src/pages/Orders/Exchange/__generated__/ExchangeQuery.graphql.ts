/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExchangeQueryVariables = {};
export type ExchangeQueryResponse = {
    readonly currentUser: {
        readonly fiatBalance: {
            readonly " $fragmentRefs": FragmentRefs<"ExchangePanel_fiatBalances">;
        };
        readonly balance: {
            readonly " $fragmentRefs": FragmentRefs<"ExchangePanel_balances">;
        };
    } | null;
    readonly buyCryptoOrders: {
        readonly " $fragmentRefs": FragmentRefs<"ExchangeHistory_buyCryptoOrders">;
    };
    readonly sellCryptoOrders: {
        readonly " $fragmentRefs": FragmentRefs<"ExchangeHistory_sellCryptoOrders">;
    };
};
export type ExchangeQuery = {
    readonly response: ExchangeQueryResponse;
    readonly variables: ExchangeQueryVariables;
};



/*
query ExchangeQuery {
  currentUser {
    fiatBalance {
      ...ExchangePanel_fiatBalances
      id
    }
    balance {
      ...ExchangePanel_balances
      id
    }
    id
  }
  buyCryptoOrders {
    ...ExchangeHistory_buyCryptoOrders
  }
  sellCryptoOrders {
    ...ExchangeHistory_sellCryptoOrders
  }
}

fragment ExchangeHistory_buyCryptoOrders on BuyCryptoOrderConnection {
  edges {
    node {
      id
      status
      createdAt
      paidAmountCents
      receivedAmount
      __typename
    }
  }
}

fragment ExchangeHistory_sellCryptoOrders on SellCryptoOrderConnection {
  edges {
    node {
      id
      status
      paidAmount
      receivedAmountCents
      createdAt
      __typename
    }
  }
}

fragment ExchangePanel_balances on Balance {
  amount
}

fragment ExchangePanel_fiatBalances on FiatBalance {
  amountCents
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
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FiatBalance",
            "kind": "LinkedField",
            "name": "fiatBalance",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ExchangePanel_fiatBalances"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Balance",
            "kind": "LinkedField",
            "name": "balance",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ExchangePanel_balances"
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
        "concreteType": "BuyCryptoOrderConnection",
        "kind": "LinkedField",
        "name": "buyCryptoOrders",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExchangeHistory_buyCryptoOrders"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "SellCryptoOrderConnection",
        "kind": "LinkedField",
        "name": "sellCryptoOrders",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExchangeHistory_sellCryptoOrders"
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FiatBalance",
            "kind": "LinkedField",
            "name": "fiatBalance",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "amountCents",
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Balance",
            "kind": "LinkedField",
            "name": "balance",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "amount",
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "BuyCryptoOrderConnection",
        "kind": "LinkedField",
        "name": "buyCryptoOrders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BuyCryptoOrderEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BuyCryptoOrder",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "paidAmountCents",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "receivedAmount",
                    "storageKey": null
                  },
                  (v3/*: any*/)
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
        "concreteType": "SellCryptoOrderConnection",
        "kind": "LinkedField",
        "name": "sellCryptoOrders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SellCryptoOrderEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SellCryptoOrder",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "paidAmount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "receivedAmountCents",
                    "storageKey": null
                  },
                  (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "3312f3d7aa6ac4b7051376b61f10c957",
    "id": null,
    "metadata": {},
    "name": "ExchangeQuery",
    "operationKind": "query",
    "text": "query ExchangeQuery {\n  currentUser {\n    fiatBalance {\n      ...ExchangePanel_fiatBalances\n      id\n    }\n    balance {\n      ...ExchangePanel_balances\n      id\n    }\n    id\n  }\n  buyCryptoOrders {\n    ...ExchangeHistory_buyCryptoOrders\n  }\n  sellCryptoOrders {\n    ...ExchangeHistory_sellCryptoOrders\n  }\n}\n\nfragment ExchangeHistory_buyCryptoOrders on BuyCryptoOrderConnection {\n  edges {\n    node {\n      id\n      status\n      createdAt\n      paidAmountCents\n      receivedAmount\n      __typename\n    }\n  }\n}\n\nfragment ExchangeHistory_sellCryptoOrders on SellCryptoOrderConnection {\n  edges {\n    node {\n      id\n      status\n      paidAmount\n      receivedAmountCents\n      createdAt\n      __typename\n    }\n  }\n}\n\nfragment ExchangePanel_balances on Balance {\n  amount\n}\n\nfragment ExchangePanel_fiatBalances on FiatBalance {\n  amountCents\n}\n"
  }
};
})();
(node as any).hash = '85296680bd82d278a1f5d485b8b101f3';
export default node;
