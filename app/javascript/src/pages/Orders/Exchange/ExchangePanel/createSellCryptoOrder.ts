import { graphql } from "babel-plugin-relay/macro";
import type { Environment } from "react-relay";
import { commitMutation } from "react-relay";

import type { createSellCryptoOrderMutationVariables } from "./__generated__/createSellCryptoOrderMutation.graphql";

export const commitCreateSellCryptoOrderMutation = (
  environment: Environment,
  variables: createSellCryptoOrderMutationVariables
) => {
  return commitMutation(environment, {
    mutation: graphql`
      mutation createSellCryptoOrderMutation(
        $currencyId: ID!
        $amount: String!
      ) {
        createSellCryptoOrder(
          input: { order: { currencyId: $currencyId, amount: $amount } }
        ) {
          errors {
            messages
          }
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
