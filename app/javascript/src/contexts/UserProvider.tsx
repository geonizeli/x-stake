import type { FC } from "react";
import React, { createContext, useContext } from "react";

type CurrentUserContext = {
  user: {
    readonly firstName: string;
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
  user: {
    readonly firstName: string;
  } | null;
};

export const UserProvider: FC<Props> = ({ user, children }) => (
  <Context.Provider value={{ user, isAuthenticated: !!user }}>
    {children}
  </Context.Provider>
);
