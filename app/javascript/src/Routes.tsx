import type { FC } from "react";
import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Wallet } from "./pages";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/wallet">
        <Wallet />
      </Route>
    </Switch>
  );
};
