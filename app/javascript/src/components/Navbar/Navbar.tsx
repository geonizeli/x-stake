import * as React from "react";

import XStakeLogo from "../../images/logo.png";
import { useApp } from "../../contexts/AppProvider";
import { useCurrentUser } from "../../contexts/UserProvider";

const linkStyles =
  "cursor-pointer bg-transparent hover:bg-gray-100 h-full px-4 font-bold flex items-center";

export const Navbar = () => {
  const { setSideNavExpanded } = useApp();
  const handleExpandSideNav = () => {
    setSideNavExpanded((prevState) => !prevState);
  };

  const { isAuthenticated } = useCurrentUser();

  const csrfToken =
    document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content") ?? "";

  return (
    <nav className="w-full h-16 flex bg-white shadow items-center px-4 space-x-2 z-50">
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
          <form className="h-full" method="post" action="/users/sign_out">
            <input className={linkStyles} type="submit" value="Sair" />
            <input
              type="hidden"
              name="authenticity_token"
              defaultValue={csrfToken}
            />
            <input type="hidden" name="_method" value="delete" />
          </form>
        ) : (
          <a href="/users/sign_in" className={linkStyles}>
            Entrar
          </a>
        )}
      </div>
    </nav>
  );
};
