import type { Dispatch, FC, SetStateAction } from "react";
import React, { createContext, useContext, useState } from "react";

export type AppContext = {
  setSideNavExpanded: Dispatch<SetStateAction<boolean>>;
  sideNavExpanded: boolean;
};

const Context = createContext<AppContext | null>(null);

export const useAppContext = (): AppContext => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error("You probably forgot to put <AppContext>.");
  }

  return context;
};

export const AppContext: FC = ({ children }) => {
  const [sideNavExpanded, setSideNavExpanded] = useState(false);

  return (
    <Context.Provider value={{ sideNavExpanded, setSideNavExpanded }}>
      {children}
    </Context.Provider>
  );
};
