import type { FC } from "react";
import React, { useState, createContext, useContext } from "react";

import type { Show_deposit_order$key } from "./Show/__generated__/Show_deposit_order.graphql";

type Order = Show_deposit_order$key & { id: string };

type DepositContext = {
  openOrder: Order | null;
  setOpenOrder: React.Dispatch<React.SetStateAction<Order | null>>;
  fetchKey: string;
  setFetchKey: React.Dispatch<React.SetStateAction<string>>;
};

const Context = createContext<DepositContext | null>(null);

export const useDepositContext = (): DepositContext => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("You must wrap the component with <DepositProvider />");
  }

  return context;
};

export const DepositProvider: FC = ({ children }) => {
  const [openOrder, setOpenOrder] = useState<Order | null>(null);
  const [fetchKey, setFetchKey] = useState<string>("empty");

  return (
    <Context.Provider
      value={{
        openOrder,
        setOpenOrder,
        fetchKey,
        setFetchKey,
      }}
    >
      {children}
    </Context.Provider>
  );
};
