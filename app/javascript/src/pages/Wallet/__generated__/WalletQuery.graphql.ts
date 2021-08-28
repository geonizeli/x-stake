/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type WalletQueryVariables = {};
export type WalletQueryResponse = {
    readonly currentUser: {
        readonly fiatBalance: {
            readonly " $fragmentRefs": FragmentRefs<"FiatBalance_fiatBalance">;
        };
        readonly balance: {
            readonly " $fragmentRefs": FragmentRefs<"Balance_balance">;
        };
    } | null;
};
export type WalletQuery = {
    readonly response: WalletQueryResponse;
    readonly variables: WalletQueryVariables;
};



/*
query WalletQuery {
  currentUser {
    fiatBalance {
      ...FiatBalance_fiatBalance
      id
    }
    balance {
      ...Balance_balance
      id
    }
    id
  }
}

fragment Balance_balance on Balance {
  amount
}

fragment FiatBalance_fiatBalance on FiatBalance {
  amountCents
  amountCurrency
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
                "name": "FiatBalance_fiatBalance"
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
                "name": "Balance_balance"
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
      }
    ]
  },
  "params": {
    "cacheID": "d0537f2712255befa46df80db6c7246b",
    "id": null,
    "metadata": {},
    "name": "WalletQuery",
    "operationKind": "query",
    "text": "query WalletQuery {\n  currentUser {\n    fiatBalance {\n      ...FiatBalance_fiatBalance\n      id\n    }\n    balance {\n      ...Balance_balance\n      id\n    }\n    id\n  }\n}\n\nfragment Balance_balance on Balance {\n  amount\n}\n\nfragment FiatBalance_fiatBalance on FiatBalance {\n  amountCents\n  amountCurrency\n}\n"
  }
};
})();
(node as any).hash = '61fbc56a1e87c83a8a0a4460c231be53';
export default node;
