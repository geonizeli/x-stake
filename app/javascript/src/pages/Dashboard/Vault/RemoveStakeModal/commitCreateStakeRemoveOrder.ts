import { graphql } from "babel-plugin-relay/macro";
import type { Environment } from "react-relay";
import { commitMutation } from "react-relay";

import type { commitCreateStakeRemoveOrderMutationVariables } from "./__generated__/commitCreateStakeRemoveOrderMutation.graphql";

export const commitCreateStakeRemoveOrderMutation = (
  environment: Environment,
  variables: commitCreateStakeRemoveOrderMutationVariables
) => {
  return commitMutation(environment, {
    mutation: graphql`
      mutation commitCreateStakeRemoveOrderMutation(
        $poolName: String!
        $amount: String!
      ) {
        createStakeRemoveOrder(
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
      window.location.href = "/orders/stake";
    },
    onError: (_error) => {},
  });
};
