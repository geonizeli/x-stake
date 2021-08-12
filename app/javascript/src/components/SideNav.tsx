import * as React from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

import { useApp } from "../contexts/AppProvider";

type MenuItem = {
  label: string;
  path: string;
};

const MenuItems: MenuItem[] = [
  {
    label: "Início",
    path: "/",
  },
  {
    label: "Carteira",
    path: "/wallet",
  },
];

export const SideNav = () => {
  const { sideNavExpanded, setSideNavExpanded } = useApp();

  const handleCloseSideNav = () => {
    setSideNavExpanded(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      handleCloseSideNav();
    }
  };

  return (
    <>
      <Transition
        show={sideNavExpanded}
        enter="transition-opacity duration-500 z-30"
        enterFrom="opacity-0 z-30"
        enterTo="opacity-100 z-30"
        leave="transition-opacity duration-500 z-30"
        leaveFrom="opacity-100 z-30"
        leaveTo="opacity-0 z-30"
      >
        <div
          role="none"
          onKeyPress={handleKeyPress}
          onClick={() => handleCloseSideNav()}
          className="xl:hidden absolute w-full h-full bg-black bg-opacity-60 z-30"
        />
      </Transition>

      <Transition
        className="h-full"
        show={sideNavExpanded || window.screenY >= 1280}
        enter="transition-opacity duration-500 z-40"
        enterFrom="opacity-0 z-40"
        enterTo="opacity-100 z-40"
        leave="transition-opacity duration-500 z-40"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <aside className="bg-white w-5/6 md:w-2/6 overflow-hidden absolute h-full drop-shadow-xl drop border-r border-gray-200 z-40 xl:transition-none xl:mx-0 xl:static xl:w-full mx-0">
          <ul>
            {MenuItems.map((item) => (
              <Link to={item.path} key={item.label} role="menuitem">
                <li className="text-xl p-4 px-8 hover:bg-gray-100 cursor-pointer">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </aside>
      </Transition>
    </>
  );
};
