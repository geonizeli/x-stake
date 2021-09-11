import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay";
import { BrowserRouter as Router } from "react-router-dom";

import { environment } from "./relay/environment";
import { App } from "./App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <React.StrictMode>
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback="Carregando...">
          <Router>
            <App />
          </Router>
        </Suspense>
      </RelayEnvironmentProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
