import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import React, { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";

import { Navbar, SideNav } from "./components";
import { AppProvider } from "./contexts/AppProvider";
import { UserProvider } from "./contexts/UserProvider";
import { Routes } from "./Routes";
import type { AppQuery } from "./__generated__/AppQuery.graphql";

export const App: FC = () => {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        currentUser {
          ...UserProvider_user
        }
      }
    `,
    {}
  );

  return (
    <AppProvider>
      <UserProvider userRef={data.currentUser}>
        <main className="min-h-screen w-full bg-gray-50 flex flex-col">
          <Navbar />
          <div className="flex" style={{ minHeight: "calc(100vh - 4rem)" }}>
            <SideNav />
            <Suspense fallback="Carregando...">
              <Routes />
            </Suspense>
          </div>
        </main>
      </UserProvider>
    </AppProvider>
  );
};
