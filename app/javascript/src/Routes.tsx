import type { FC } from "react";
import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Orders, Wallet } from "./pages";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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
    </Switch>
  );
};
