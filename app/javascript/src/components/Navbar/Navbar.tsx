import * as React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import cs from "classnames";

import XStakeLogo from "../../assets/images/logo.png";
import { useApp } from "../../contexts/AppProvider";
import { useCurrentUser } from "../../contexts/UserProvider";

const linkStyles =
  "cursor-pointer bg-transparent hover:bg-gray-100 h-full px-4 font-bold flex items-center";

export const Navbar = () => {
  const { isAuthenticated } = useCurrentUser();
  const { setSideNavExpanded } = useApp();
  const handleExpandSideNav = () => {
    setSideNavExpanded((prevState) => !prevState);
  };

  const csrfToken =
    document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content") ?? "";

  return (
    <nav className="w-full h-16 flex bg-white shadow items-center px-4 space-x-2 z-50">
      <button
        className={cs(
          "w-12 mr-2 md:w-10 h-12 md:h-10 xl:hidden fixed md:relative bottom-8 md:bottom-auto right-8 md:right-auto bg-white rounded-full p-3 md:p-0 shadow md:shadow-none"
        )}
        onClick={() => handleExpandSideNav()}
      >
        <MenuIcon />
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
