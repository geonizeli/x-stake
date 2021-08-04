import type { FC } from "react";
import React from "react";

import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { PoolListing } from "../../components/PoolListing";

export const Home: FC = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-x-hidden mt-16">
      <Header>
        <Container className="flex-col">
          <h1 className="text-5xl text-white font-medium">XStake</h1>
          <h2 className="text-3xl text-gray-50 font-light">
            Investir em crypto não precisa ser difícil.
          </h2>
        </Container>
      </Header>
      <Container>
        <PoolListing />
      </Container>
    </div>
  );
};
