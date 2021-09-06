import { graphql } from "babel-plugin-relay/macro";
import type { Environment } from "react-relay";
import { commitMutation } from "react-relay";

import type {
  commitCreateDepositOrderMutation as commitCreateDepositOrderMutationType,
  commitCreateDepositOrderMutationResponse,
  commitCreateDepositOrderMutationVariables,
} from "./__generated__/commitCreateDepositOrderMutation.graphql";

export const commitCreateDepositOrderMutation = (
  environment: Environment,
  variables: commitCreateDepositOrderMutationVariables,
  callback: (response: commitCreateDepositOrderMutationResponse) => void
) => {
  return commitMutation<commitCreateDepositOrderMutationType>(environment, {
    mutation: graphql`
      mutation commitCreateDepositOrderMutation($amountCents: Int!) {
        createDepositOrder(input: { order: { amountCents: $amountCents } }) {
          order {
            id
            ...Show_deposit_order
          }
        }
      }
    `,
    variables,
    onCompleted: (response) => {
      callback(response);
    },
    onError: (_error) => {},
  });
};
