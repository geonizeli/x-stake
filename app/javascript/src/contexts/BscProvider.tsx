import React, { useContext } from "react";
import { ethers } from "ethers";

import pancakeRouterV2 from "../abi/pancake-router-v2.json";

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed1.defibit.io/\n"
);

const router = new ethers.Contract(
  "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  new ethers.utils.Interface(pancakeRouterV2),
  provider
);

export type BscContext = {
  provider: typeof provider;
  pancake: {
    router: InstanceType<typeof ethers.Contract>;
  };
};

const Context = React.createContext<BscContext>({
  provider,
  pancake: {
    router,
  },
});

export const useBsc = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("You must wrap the component with <BscProvider />");
  }

  return context;
};

export const BscProvider = ({ children }: React.PropsWithChildren<any>) => {
  const value: BscContext = {
    provider,
    pancake: {
      router,
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};