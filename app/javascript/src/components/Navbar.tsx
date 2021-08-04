import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import XStakeLogo from "../images/logo.png";
import { useAppContext } from "../contexts/AppContext";

export const Navbar = () => {
  const { setSideNavExpanded } = useAppContext();

  const handleExpandSideNav = () => {
    setSideNavExpanded((prevState) => !prevState);
  };

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="fixed w-full h-16 flex bg-white shadow items-center px-4 space-x-2 z-50">
      <button
        className="w-10 h-10 xl:hidden"
        onClick={() => handleExpandSideNav()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <img
        src={XStakeLogo}
        alt="XStake Logo"
        width={64}
        placeholder="blurred"
      />
      <h1 className="text-2xl font-bold">XStake</h1>
      <div className="w-full h-full flex items-center justify-end">
        {isAuthenticated ? (
          <button
            className="cursor-pointer hover:bg-gray-100 h-full px-4 font-bold"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Sair
          </button>
        ) : (
          <button
            className="cursor-pointer hover:bg-gray-100 h-full px-4 font-bold"
            onClick={loginWithRedirect}
          >
            Entrar
          </button>
        )}
      </div>
    </nav>
  );
};