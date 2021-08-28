import { graphql } from "babel-plugin-relay/macro";
import type { Environment } from "react-relay";
import { commitMutation } from "react-relay";

import type { createBuyCryptoOrderMutationVariables } from "./__generated__/createBuyCryptoOrderMutation.graphql";

export const commitCreateBuyCryptoOrderMutation = (
  environment: Environment,
  variables: createBuyCryptoOrderMutationVariables
) => {
  return commitMutation(environment, {
    mutation: graphql`
      mutation createBuyCryptoOrderMutation($amountCents: Int!) {
        createBuyCryptoOrder(input: { order: { amountCents: $amountCents } }) {
          errors {
            messages
          }
          order {
            id
          }
        }
      }
    `,
    variables,
    onCompleted: (_response) => {
      window.location.reload();
    },
    onError: (_error) => {},
  });
};
