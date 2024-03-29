/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type createStakeOrderMutationVariables = {
    poolName: string;
    amount: string;
};
export type createStakeOrderMutationResponse = {
    readonly createStakeOrder: {
        readonly order: {
            readonly id: string;
        } | null;
    } | null;
};
export type createStakeOrderMutation = {
    readonly response: createStakeOrderMutationResponse;
    readonly variables: createStakeOrderMutationVariables;
};



/*
mutation createStakeOrderMutation(
  $poolName: String!
  $amount: String!
) {
  createStakeOrder(input: {order: {poolName: $poolName, amount: $amount}}) {
    order {
      id
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
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "amount",
                "variableName": "amount"
              },
              {
                "kind": "Variable",
                "name": "poolName",
                "variableName": "poolName"
              }
            ],
            "kind": "ObjectValue",
            "name": "order"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateStakeOrderPayload",
    "kind": "LinkedField",
    "name": "createStakeOrder",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StakeOrder",
        "kind": "LinkedField",
        "name": "order",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createStakeOrderMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "createStakeOrderMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e845ef953b2de9dd797930c0838f30f8",
    "id": null,
    "metadata": {},
    "name": "createStakeOrderMutation",
    "operationKind": "mutation",
    "text": "mutation createStakeOrderMutation(\n  $poolName: String!\n  $amount: String!\n) {\n  createStakeOrder(input: {order: {poolName: $poolName, amount: $amount}}) {\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '36f248efe00b47bc1b27f597c5ab45c3';
export default node;
