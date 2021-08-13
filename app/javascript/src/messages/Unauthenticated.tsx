import type { FC } from "react";
import React from "react";

import websiteLogin from "../assets/vectors/website_login.svg";

export const Unauthenticated: FC = () => {
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
            Parece que você não está inscrito ou não iniciou sua sessão
          </h1>
          <div className="flex justify-center">
            <a
              href="/users/sign_in"
              className="cursor-pointer mx-2 py-2 px-4 bg-gray-100 hover:bg-blue-100 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Entrar
            </a>
            <a
              href="/users/sign_up"
              className="cursor-pointer mx-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Inscrever-se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
