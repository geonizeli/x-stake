/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type createBuyCryptoOrderMutationVariables = {
    currencyId: string;
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
  $currencyId: ID!
  $amountCents: Int!
) {
  createBuyCryptoOrder(input: {order: {currencyId: $currencyId, amountCents: $amountCents}}) {
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
  "name": "amountCents"
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
                "name": "amountCents",
                "variableName": "amountCents"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createBuyCryptoOrderMutation",
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
    "name": "createBuyCryptoOrderMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d7cc0c483d893b14f46781408d9d3f2f",
    "id": null,
    "metadata": {},
    "name": "createBuyCryptoOrderMutation",
    "operationKind": "mutation",
    "text": "mutation createBuyCryptoOrderMutation(\n  $currencyId: ID!\n  $amountCents: Int!\n) {\n  createBuyCryptoOrder(input: {order: {currencyId: $currencyId, amountCents: $amountCents}}) {\n    errors {\n      messages\n    }\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a272ce6d5ae676a9cdc4e38eb7cc3cbe';
export default node;
