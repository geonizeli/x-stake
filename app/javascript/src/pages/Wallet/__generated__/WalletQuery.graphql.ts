/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type WalletQueryVariables = {};
export type WalletQueryResponse = {
    readonly currentUser: {
        readonly " $fragmentRefs": FragmentRefs<"FiatBalance_fiatBalance" | "Balance_wallet">;
    } | null;
};
export type WalletQuery = {
    readonly response: WalletQueryResponse;
    readonly variables: WalletQueryVariables;
};



/*
query WalletQuery {
  currentUser {
    ...FiatBalance_fiatBalance
    ...Balance_wallet
    id
  }
}

fragment Balance_wallet on User {
  wallet {
    cakeBalance
  }
}

fragment FiatBalance_fiatBalance on User {
  fiatBalance {
    amountCents
    amountCurrency
    id
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "WalletQuery",
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
            "name": "FiatBalance_fiatBalance"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Balance_wallet"
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
    "name": "WalletQuery",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "amountCurrency",
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
      }
    ]
  },
  "params": {
    "cacheID": "4631f43e84d22d8fdfa82706d907f478",
    "id": null,
    "metadata": {},
    "name": "WalletQuery",
    "operationKind": "query",
    "text": "query WalletQuery {\n  currentUser {\n    ...FiatBalance_fiatBalance\n    ...Balance_wallet\n    id\n  }\n}\n\nfragment Balance_wallet on User {\n  wallet {\n    cakeBalance\n  }\n}\n\nfragment FiatBalance_fiatBalance on User {\n  fiatBalance {\n    amountCents\n    amountCurrency\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a91fc17a25b5a68672b3016813de17bc';
export default node;
