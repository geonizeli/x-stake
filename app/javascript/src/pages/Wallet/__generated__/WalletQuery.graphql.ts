/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type WalletQueryVariables = {};
export type WalletQueryResponse = {
    readonly fiatBalances: {
        readonly " $fragmentRefs": FragmentRefs<"FiatBalances_fiatBalances">;
    };
    readonly balances: {
        readonly " $fragmentRefs": FragmentRefs<"Balances_balances">;
    };
};
export type WalletQuery = {
    readonly response: WalletQueryResponse;
    readonly variables: WalletQueryVariables;
};



/*
query WalletQuery {
  fiatBalances {
    ...FiatBalances_fiatBalances
  }
  balances {
    ...Balances_balances
  }
}

fragment Balances_balances on BalanceConnection {
  nodes {
    id
    amount
    currency {
      name
      id
    }
  }
}

fragment FiatBalances_fiatBalances on FiatBalanceConnection {
  nodes {
    id
    amountCents
    amountCurrency
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
        "concreteType": "FiatBalanceConnection",
        "kind": "LinkedField",
        "name": "fiatBalances",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FiatBalances_fiatBalances"
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
            "name": "Balances_balances"
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
        "concreteType": "FiatBalanceConnection",
        "kind": "LinkedField",
        "name": "fiatBalances",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FiatBalance",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
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
            "concreteType": "Balance",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
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
    "cacheID": "82d013e2bf418b53aeec5412f2f92661",
    "id": null,
    "metadata": {},
    "name": "WalletQuery",
    "operationKind": "query",
    "text": "query WalletQuery {\n  fiatBalances {\n    ...FiatBalances_fiatBalances\n  }\n  balances {\n    ...Balances_balances\n  }\n}\n\nfragment Balances_balances on BalanceConnection {\n  nodes {\n    id\n    amount\n    currency {\n      name\n      id\n    }\n  }\n}\n\nfragment FiatBalances_fiatBalances on FiatBalanceConnection {\n  nodes {\n    id\n    amountCents\n    amountCurrency\n  }\n}\n"
  }
};
})();
(node as any).hash = '855efce679c691a77938b64376a1a805';
export default node;
