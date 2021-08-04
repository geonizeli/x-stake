import type { FC } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { SideNav } from "./components/SideNav";
import { AppContext } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthProvider";
import { Routes } from "./Routes";

export const App: FC = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContext>
          <main className="min-h-screen w-full bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex flex-grow">
              <SideNav />
              <Routes />
            </div>
          </main>
        </AppContext>
      </AuthProvider>
    </Router>
  );
};
