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
      mutation createStakeOrderMutation(
        $currencyId: ID!
        $poolName: String!
        $amount: String!
      ) {
        createStakeOrder(
          input: {
            order: {
              currencyId: $currencyId
              poolName: $poolName
              amount: $amount
            }
          }
        ) {
          order {
            id
          }
        }
      }
    `,
    variables: { ...variables },
    onCompleted: (_response) => {
      window.location.reload();
    },
    onError: (_error) => {},
  });
};
