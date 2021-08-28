/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type createSellCryptoOrderMutationVariables = {
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
  $amount: String!
) {
  createSellCryptoOrder(input: {order: {amount: $amount}}) {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "amount"
  }
],
v1 = [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createSellCryptoOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createSellCryptoOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d4cb659efe0d2b63262cce510327ae11",
    "id": null,
    "metadata": {},
    "name": "createSellCryptoOrderMutation",
    "operationKind": "mutation",
    "text": "mutation createSellCryptoOrderMutation(\n  $amount: String!\n) {\n  createSellCryptoOrder(input: {order: {amount: $amount}}) {\n    errors {\n      messages\n    }\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5ce66da95c141385c607a3be499805f7';
export default node;
