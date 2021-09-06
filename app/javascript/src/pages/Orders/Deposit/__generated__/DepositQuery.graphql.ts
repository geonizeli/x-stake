/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING" | "%future added value";
export type DepositQueryVariables = {};
export type DepositQueryResponse = {
    readonly depositOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly status: ProcessStatus;
                readonly createdAt: unknown;
                readonly paidAmountCents: number;
                readonly receivedAmountCents: number;
            };
        }>;
    };
};
export type DepositQuery = {
    readonly response: DepositQueryResponse;
    readonly variables: DepositQueryVariables;
};



/*
query DepositQuery {
  depositOrders {
    edges {
      node {
        id
        status
        createdAt
        paidAmountCents
        receivedAmountCents
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DepositOrderConnection",
    "kind": "LinkedField",
    "name": "depositOrders",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DepositQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DepositQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "50b4e177048e536e83735990104fce02",
    "id": null,
    "metadata": {},
    "name": "DepositQuery",
    "operationKind": "query",
    "text": "query DepositQuery {\n  depositOrders {\n    edges {\n      node {\n        id\n        status\n        createdAt\n        paidAmountCents\n        receivedAmountCents\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f4d2d75a8903d262de47e02f44136a65';
export default node;
