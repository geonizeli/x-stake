import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import cs from "classnames";

import { useApp } from "../../contexts/AppProvider";
import { useCurrentUser } from "../../contexts/UserProvider";

type MenuItem = {
  label: string;
  path: string;
};

const MenuItems: MenuItem[] = [
  {
    label: "Posições",
    path: "/",
  },
  {
    label: "Minhas Posições",
    path: "/dashboard",
  },
  {
    label: "Carteira",
    path: "/wallet",
  },
  {
    label: "Ordem de Troca",
    path: "/orders/exchange",
  },
  {
    label: "Ordem de Stake",
    path: "/orders/stake",
  },
  {
    label: "Ordem de Depósito",
    path: "/orders/deposit",
  },
];

export const SideNav = () => {
  const { isAuthenticated } = useCurrentUser();
  const { sideNavExpanded, setSideNavExpanded } = useApp();
  const location = useLocation();

  const handleCloseSideNav = () => {
    setSideNavExpanded(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      handleCloseSideNav();
    }
  };

  if (!isAuthenticated) return null;

  return (
    <>
      <Transition
        show={sideNavExpanded}
        className="z-30"
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          role="none"
          onKeyPress={handleKeyPress}
          onClick={handleCloseSideNav}
          className="xl:hidden absolute w-full h-full bg-black bg-opacity-60"
        />
      </Transition>
      <aside
        className={`bg-white w-4/6 md:w-2/6 lg:w-1/6 overflow-hidden absolute min-h-full drop-shadow-xl drop border-r border-gray-200 z-40 transition-all duration-500 xl:transition-none xl:mx-0 xl:static ${
          sideNavExpanded ? "mx-0" : "-mx-full"
        }`}
      >
        <ul>
          {MenuItems.map((item) => (
            <Link to={item.path} key={item.label}>
              <li
                key={item.label}
                className={cs(
                  "text-xl p-4 px-8 hover:bg-gray-100 cursor-pointer",
                  location.pathname === item.path ? "bg-gray-200" : ""
                )}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    </>
  );
};
