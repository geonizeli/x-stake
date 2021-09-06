/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DepositQueryVariables = {};
export type DepositQueryResponse = {
    readonly depositOrders: {
        readonly totalCount: number;
        readonly " $fragmentRefs": FragmentRefs<"History_depositOrders">;
    };
};
export type DepositQuery = {
    readonly response: DepositQueryResponse;
    readonly variables: DepositQueryVariables;
};



/*
query DepositQuery {
  depositOrders {
    totalCount
    ...History_depositOrders
  }
}

fragment History_depositOrders on DepositOrderConnection {
  edges {
    node {
      id
      status
      createdAt
      paidAmountCents
      receivedAmountCents
      ...Show_deposit_order
    }
  }
}

fragment Show_deposit_order on DepositOrder {
  transactionId
  paidAmountCents
  receivedAmountCents
  status
  createdAt
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DepositQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DepositOrderConnection",
        "kind": "LinkedField",
        "name": "depositOrders",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "History_depositOrders"
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
    "name": "DepositQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DepositOrderConnection",
        "kind": "LinkedField",
        "name": "depositOrders",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "DepositOrderEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DepositOrder",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
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
                    "name": "receivedAmountCents",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "transactionId",
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
    "cacheID": "99f3fbbd023ef8a38b0490275cb58aa6",
    "id": null,
    "metadata": {},
    "name": "DepositQuery",
    "operationKind": "query",
    "text": "query DepositQuery {\n  depositOrders {\n    totalCount\n    ...History_depositOrders\n  }\n}\n\nfragment History_depositOrders on DepositOrderConnection {\n  edges {\n    node {\n      id\n      status\n      createdAt\n      paidAmountCents\n      receivedAmountCents\n      ...Show_deposit_order\n    }\n  }\n}\n\nfragment Show_deposit_order on DepositOrder {\n  transactionId\n  paidAmountCents\n  receivedAmountCents\n  status\n  createdAt\n}\n"
  }
};
})();
(node as any).hash = '8394525008fabe782ee41126e50d63b1';
export default node;
