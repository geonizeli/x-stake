/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type commitCreateDepositOrderMutationVariables = {
    amountCents: number;
};
export type commitCreateDepositOrderMutationResponse = {
    readonly createDepositOrder: {
        readonly order: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"Show_deposit_order">;
        } | null;
    } | null;
};
export type commitCreateDepositOrderMutation = {
    readonly response: commitCreateDepositOrderMutationResponse;
    readonly variables: commitCreateDepositOrderMutationVariables;
};



/*
mutation commitCreateDepositOrderMutation(
  $amountCents: Int!
) {
  createDepositOrder(input: {order: {amountCents: $amountCents}}) {
    order {
      id
      ...Show_deposit_order
    }
  }
}

fragment Show_deposit_order on DepositOrder {
  id
  transactionId
  paidAmountCents
  receivedAmountCents
  status
  createdAt
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "commitCreateDepositOrderMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateDepositOrderPayload",
        "kind": "LinkedField",
        "name": "createDepositOrder",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DepositOrder",
            "kind": "LinkedField",
            "name": "order",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Show_deposit_order"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "commitCreateDepositOrderMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateDepositOrderPayload",
        "kind": "LinkedField",
        "name": "createDepositOrder",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DepositOrder",
            "kind": "LinkedField",
            "name": "order",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "transactionId",
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
    "cacheID": "f83279e6438b80e14dbeb3efc1a20742",
    "id": null,
    "metadata": {},
    "name": "commitCreateDepositOrderMutation",
    "operationKind": "mutation",
    "text": "mutation commitCreateDepositOrderMutation(\n  $amountCents: Int!\n) {\n  createDepositOrder(input: {order: {amountCents: $amountCents}}) {\n    order {\n      id\n      ...Show_deposit_order\n    }\n  }\n}\n\nfragment Show_deposit_order on DepositOrder {\n  id\n  transactionId\n  paidAmountCents\n  receivedAmountCents\n  status\n  createdAt\n}\n"
  }
};
})();
(node as any).hash = '143549ad827756ac107c08e45b0bc525';
export default node;
