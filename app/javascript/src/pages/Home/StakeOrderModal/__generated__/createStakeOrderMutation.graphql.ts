/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type createStakeOrderMutationVariables = {
    currencyId: string;
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
  $currencyId: ID!
  $poolName: String!
  $amount: String!
) {
  createStakeOrder(input: {order: {currencyId: $currencyId, poolName: $poolName, amount: $amount}}) {
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
  "name": "currencyId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "poolName"
},
v3 = [
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
                "name": "currencyId",
                "variableName": "currencyId"
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createStakeOrderMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "createStakeOrderMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "bfe4935c593947810fbb8d7a52421483",
    "id": null,
    "metadata": {},
    "name": "createStakeOrderMutation",
    "operationKind": "mutation",
    "text": "mutation createStakeOrderMutation(\n  $currencyId: ID!\n  $poolName: String!\n  $amount: String!\n) {\n  createStakeOrder(input: {order: {currencyId: $currencyId, poolName: $poolName, amount: $amount}}) {\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '036f321e28fcb4bd3e274498cd3f116a';
export default node;
