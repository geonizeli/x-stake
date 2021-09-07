/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ProcessStatus = "CANCELED" | "COMPLETED" | "PROCESSING" | "%future added value";
export type VaultCardQueryVariables = {
    status: ProcessStatus;
    poolName: string;
    amount: number;
};
export type VaultCardQueryResponse = {
    readonly stakeOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly amount: string;
            };
        }>;
    };
};
export type VaultCardQuery = {
    readonly response: VaultCardQueryResponse;
    readonly variables: VaultCardQueryVariables;
};



/*
query VaultCardQuery(
  $status: ProcessStatus!
  $poolName: String!
  $amount: Float!
) {
  stakeOrders(filter: {status: [$status], poolName: {eq: $poolName}, amount: {lt: $amount}}) {
    edges {
      node {
        amount
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "amount"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "poolName"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v3 = [
  {
    "fields": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "lt",
            "variableName": "amount"
          }
        ],
        "kind": "ObjectValue",
        "name": "amount"
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "eq",
            "variableName": "poolName"
          }
        ],
        "kind": "ObjectValue",
        "name": "poolName"
      },
      {
        "items": [
          {
            "kind": "Variable",
            "name": "status.0",
            "variableName": "status"
          }
        ],
        "kind": "ListValue",
        "name": "status"
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "VaultCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "VaultCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
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
    "cacheID": "1bbb395dae29c85a1be62eb32995458d",
    "id": null,
    "metadata": {},
    "name": "VaultCardQuery",
    "operationKind": "query",
    "text": "query VaultCardQuery(\n  $status: ProcessStatus!\n  $poolName: String!\n  $amount: Float!\n) {\n  stakeOrders(filter: {status: [$status], poolName: {eq: $poolName}, amount: {lt: $amount}}) {\n    edges {\n      node {\n        amount\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dbf07265190b32d9f6f4e66c5e3d851f';
export default node;
