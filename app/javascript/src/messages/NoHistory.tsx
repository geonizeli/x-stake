import type { FC } from "react";
import React from "react";

import websiteLogin from "../assets/vectors/no_data.svg";

type Props = {
  historyName: string;
};

export const NoHistory: FC<Props> = ({ historyName, children }) => {
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={websiteLogin}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Você não possui históricos de {historyName}
          </h1>
        </div>
        {children}
      </div>
    </section>
  );
};
