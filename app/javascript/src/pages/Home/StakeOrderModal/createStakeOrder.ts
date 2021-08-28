import { graphql } from "babel-plugin-relay/macro";
import type { Environment } from "react-relay";
import { commitMutation } from "react-relay";

import type { createStakeOrderMutationVariables } from "./__generated__/createStakeOrderMutation.graphql";

export const commitCreateStakeOrderMutation = (
  environment: Environment,
  variables: createStakeOrderMutationVariables
) => {
  return commitMutation(environment, {
    mutation: graphql`
      mutation createStakeOrderMutation($poolName: String!, $amount: String!) {
        createStakeOrder(
          input: { order: { poolName: $poolName, amount: $amount } }
        ) {
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
