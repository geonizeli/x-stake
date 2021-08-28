/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type createBuyCryptoOrderMutationVariables = {
    amountCents: number;
};
export type createBuyCryptoOrderMutationResponse = {
    readonly createBuyCryptoOrder: {
        readonly errors: ReadonlyArray<{
            readonly messages: ReadonlyArray<string> | null;
        }> | null;
        readonly order: {
            readonly id: string;
        } | null;
    } | null;
};
export type createBuyCryptoOrderMutation = {
    readonly response: createBuyCryptoOrderMutationResponse;
    readonly variables: createBuyCryptoOrderMutationVariables;
};



/*
mutation createBuyCryptoOrderMutation(
  $amountCents: Int!
) {
  createBuyCryptoOrder(input: {order: {amountCents: $amountCents}}) {
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
    "name": "amountCents"
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
                "name": "amountCents",
                "variableName": "amountCents"
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
    "concreteType": "CreateBuyCryptoOrderPayload",
    "kind": "LinkedField",
    "name": "createBuyCryptoOrder",
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
        "concreteType": "BuyCryptoOrder",
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
    "name": "createBuyCryptoOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createBuyCryptoOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aad8a1ea13e8a77031c98f59b0c5e0db",
    "id": null,
    "metadata": {},
    "name": "createBuyCryptoOrderMutation",
    "operationKind": "mutation",
    "text": "mutation createBuyCryptoOrderMutation(\n  $amountCents: Int!\n) {\n  createBuyCryptoOrder(input: {order: {amountCents: $amountCents}}) {\n    errors {\n      messages\n    }\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1eceec2d8340693381f746a9e75476b8';
export default node;
