/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type createSellCryptoOrderMutationVariables = {
    currencyId: string;
    amount: string;
};
export type createSellCryptoOrderMutationResponse = {
    readonly createSellCryptoOrder: {
        readonly errors: ReadonlyArray<{
            readonly messages: ReadonlyArray<string> | null;
        }> | null;
        readonly order: {
            readonly id: string;
        } | null;
    } | null;
};
export type createSellCryptoOrderMutation = {
    readonly response: createSellCryptoOrderMutationResponse;
    readonly variables: createSellCryptoOrderMutationVariables;
};



/*
mutation createSellCryptoOrderMutation(
  $currencyId: ID!
  $amount: String!
) {
  createSellCryptoOrder(input: {order: {currencyId: $currencyId, amount: $amount}}) {
    errors {
      messages
    }
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
                "name": "currencyId",
                "variableName": "currencyId"
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
    "concreteType": "CreateSellCryptoOrderPayload",
    "kind": "LinkedField",
    "name": "createSellCryptoOrder",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RecordInvalid",
        "kind": "LinkedField",
        "name": "errors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "messages",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "SellCryptoOrder",
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
    "name": "createSellCryptoOrderMutation",
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
    "name": "createSellCryptoOrderMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2c81ae5adf76b4fa157bc5453df40fcc",
    "id": null,
    "metadata": {},
    "name": "createSellCryptoOrderMutation",
    "operationKind": "mutation",
    "text": "mutation createSellCryptoOrderMutation(\n  $currencyId: ID!\n  $amount: String!\n) {\n  createSellCryptoOrder(input: {order: {currencyId: $currencyId, amount: $amount}}) {\n    errors {\n      messages\n    }\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '073e3f84d5921279ded3149dd9ec7db9';
export default node;
