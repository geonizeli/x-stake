import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContext } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthProvider";
import { Home } from "./pages";

export const App = () => {
  return (
    <AuthProvider>
      <AppContext>
        <main className="min-h-screen w-full bg-gray-50 flex flex-col">
          <Router>
            <Switch>
              <Route path="/hello_about">
                <div className="bg-gray-600">Hello World!</div>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </main>
      </AppContext>
    </AuthProvider>
  );
};
