/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING" | "%future added value";
export type StakeQueryVariables = {};
export type StakeQueryResponse = {
    readonly stakeOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly poolName: string;
                readonly amount: string;
                readonly createdAt: unknown;
                readonly status: ProcessStatus;
            };
        }>;
    };
};
export type StakeQuery = {
    readonly response: StakeQueryResponse;
    readonly variables: StakeQueryVariables;
};



/*
query StakeQuery {
  stakeOrders {
    edges {
      node {
        id
        poolName
        amount
        createdAt
        status
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
    "concreteType": "StakeOrderConnection",
    "kind": "LinkedField",
    "name": "stakeOrders",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StakeOrderEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "StakeOrder",
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
                "name": "poolName",
                "storageKey": null
              },
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
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "status",
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
    "name": "StakeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "StakeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "87576f672bf070da8b3a0da1e47f53b1",
    "id": null,
    "metadata": {},
    "name": "StakeQuery",
    "operationKind": "query",
    "text": "query StakeQuery {\n  stakeOrders {\n    edges {\n      node {\n        id\n        poolName\n        amount\n        createdAt\n        status\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '29eb880947d0b6abb92c13928f5fbbe0';
export default node;
