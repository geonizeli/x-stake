/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type commitCreateStakeRemoveOrderMutationVariables = {
    poolName: string;
    amount: string;
};
export type commitCreateStakeRemoveOrderMutationResponse = {
    readonly createStakeRemoveOrder: {
        readonly order: {
            readonly id: string;
        } | null;
    } | null;
};
export type commitCreateStakeRemoveOrderMutation = {
    readonly response: commitCreateStakeRemoveOrderMutationResponse;
    readonly variables: commitCreateStakeRemoveOrderMutationVariables;
};



/*
mutation commitCreateStakeRemoveOrderMutation(
  $poolName: String!
  $amount: String!
) {
  createStakeRemoveOrder(input: {order: {poolName: $poolName, amount: $amount}}) {
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
    "concreteType": "CreateStakeRemoveOrderPayload",
    "kind": "LinkedField",
    "name": "createStakeRemoveOrder",
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
    "name": "commitCreateStakeRemoveOrderMutation",
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
    "name": "commitCreateStakeRemoveOrderMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a3a646d6f52bf3ddc29e33b8fce4661b",
    "id": null,
    "metadata": {},
    "name": "commitCreateStakeRemoveOrderMutation",
    "operationKind": "mutation",
    "text": "mutation commitCreateStakeRemoveOrderMutation(\n  $poolName: String!\n  $amount: String!\n) {\n  createStakeRemoveOrder(input: {order: {poolName: $poolName, amount: $amount}}) {\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '561be0497e5317997815bea692b73da9';
export default node;
