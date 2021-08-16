/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExchangeQueryVariables = {};
export type ExchangeQueryResponse = {
    readonly fiatBalances: {
        readonly " $fragmentRefs": FragmentRefs<"ExchangePanel_fiatBalances">;
    };
    readonly balances: {
        readonly " $fragmentRefs": FragmentRefs<"ExchangePanel_balances">;
    };
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
  fiatBalances {
    ...ExchangePanel_fiatBalances
  }
  balances {
    ...ExchangePanel_balances
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
      currency {
        name
        id
      }
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
      currency {
        name
        id
      }
      __typename
    }
  }
}

fragment ExchangePanel_balances on BalanceConnection {
  edges {
    node {
      amount
      currency {
        id
      }
      id
    }
  }
}

fragment ExchangePanel_fiatBalances on FiatBalanceConnection {
  edges {
    node {
      amountCents
      id
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
  "concreteType": "Currency",
  "kind": "LinkedField",
  "name": "currency",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    (v0/*: any*/)
  ],
  "storageKey": null
},
v4 = {
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
        "concreteType": "FiatBalanceConnection",
        "kind": "LinkedField",
        "name": "fiatBalances",
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
        "concreteType": "BalanceConnection",
        "kind": "LinkedField",
        "name": "balances",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExchangePanel_balances"
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "amount",
                    "storageKey": null
                  },
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
                  (v3/*: any*/),
                  (v4/*: any*/)
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
                  (v3/*: any*/),
                  (v4/*: any*/)
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
    "cacheID": "424352bbffec52284c44f109ce54a441",
    "id": null,
    "metadata": {},
    "name": "ExchangeQuery",
    "operationKind": "query",
    "text": "query ExchangeQuery {\n  fiatBalances {\n    ...ExchangePanel_fiatBalances\n  }\n  balances {\n    ...ExchangePanel_balances\n  }\n  buyCryptoOrders {\n    ...ExchangeHistory_buyCryptoOrders\n  }\n  sellCryptoOrders {\n    ...ExchangeHistory_sellCryptoOrders\n  }\n}\n\nfragment ExchangeHistory_buyCryptoOrders on BuyCryptoOrderConnection {\n  edges {\n    node {\n      id\n      status\n      createdAt\n      paidAmountCents\n      receivedAmount\n      currency {\n        name\n        id\n      }\n      __typename\n    }\n  }\n}\n\nfragment ExchangeHistory_sellCryptoOrders on SellCryptoOrderConnection {\n  edges {\n    node {\n      id\n      status\n      paidAmount\n      receivedAmountCents\n      createdAt\n      currency {\n        name\n        id\n      }\n      __typename\n    }\n  }\n}\n\nfragment ExchangePanel_balances on BalanceConnection {\n  edges {\n    node {\n      amount\n      currency {\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment ExchangePanel_fiatBalances on FiatBalanceConnection {\n  edges {\n    node {\n      amountCents\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3d09bb5b003cac17750666dc76088801';
export default node;
