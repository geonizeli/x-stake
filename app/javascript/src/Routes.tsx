import type { FC } from "react";
import React from "react";
import { Switch, Route } from "react-router-dom";

import { useCurrentUser } from "./contexts/UserProvider";
import { Dashbaord, Home, Orders, Wallet } from "./pages";

export const Routes: FC = () => {
  const { isAuthenticated } = useCurrentUser();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {isAuthenticated && (
        <>
          <Route exact path="/dashboard">
            <Dashbaord />
          </Route>
          <Route exact path="/wallet">
            <Wallet />
          </Route>
          <Route exact path="/orders/exchange">
            <Orders.Exchange />
          </Route>
          <Route exact path="/orders/stake">
            <Orders.Stake />
          </Route>
          <Route exact path="/orders/deposit">
            <Orders.Deposit />
          </Route>
        </>
      )}
    </Switch>
  );
};
