import type { FC } from "react";
import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
