/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExchangeQueryVariables = {};
export type ExchangeQueryResponse = {
    readonly currentUser: {
        readonly " $fragmentRefs": FragmentRefs<"ExchangePanel_user">;
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
    ...ExchangePanel_user
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

fragment ExchangePanel_user on User {
  fiatBalance {
    amountCents
    id
  }
  wallet {
    cakeBalance
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExchangePanel_user"
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
    "cacheID": "2168c066ea4bb43d5ab066a00a35a33b",
    "id": null,
    "metadata": {},
    "name": "ExchangeQuery",
    "operationKind": "query",
    "text": "query ExchangeQuery {\n  currentUser {\n    ...ExchangePanel_user\n    id\n  }\n  buyCryptoOrders {\n    ...ExchangeHistory_buyCryptoOrders\n  }\n  sellCryptoOrders {\n    ...ExchangeHistory_sellCryptoOrders\n  }\n}\n\nfragment ExchangeHistory_buyCryptoOrders on BuyCryptoOrderConnection {\n  edges {\n    node {\n      id\n      status\n      createdAt\n      paidAmountCents\n      receivedAmount\n      __typename\n    }\n  }\n}\n\nfragment ExchangeHistory_sellCryptoOrders on SellCryptoOrderConnection {\n  edges {\n    node {\n      id\n      status\n      paidAmount\n      receivedAmountCents\n      createdAt\n      __typename\n    }\n  }\n}\n\nfragment ExchangePanel_user on User {\n  fiatBalance {\n    amountCents\n    id\n  }\n  wallet {\n    cakeBalance\n  }\n}\n"
  }
};
})();
(node as any).hash = '88aea5fd6077cc7a1b4fe6369c34a4ec';
export default node;
