import type { FC } from "react";
import React, { createContext, useContext } from "react";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import type { UserProvider_user$key } from "./__generated__/UserProvider_user.graphql";

type CurrentUserContext = {
  user: {
    firstName: string;
  } | null;
  isAuthenticated: boolean;
};

const Context = createContext<CurrentUserContext>({
  user: null,
  isAuthenticated: false,
});

export const useCurrentUser = (): CurrentUserContext => {
  const context = useContext(Context);

  return context;
};

type Props = {
  userRef: UserProvider_user$key | null;
};

export const UserProvider: FC<Props> = ({ userRef, children }) => {
  const userData = useFragment<UserProvider_user$key>(
    graphql`
      fragment UserProvider_user on User {
        firstName
      }
    `,
    userRef
  );

  const user = userData
    ? {
        firstName: userData.firstName,
      }
    : null;

  return (
    <Context.Provider
      value={{
        user,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </Context.Provider>
  );
};
