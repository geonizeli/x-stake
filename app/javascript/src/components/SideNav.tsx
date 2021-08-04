import * as React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import { useAppContext } from "../contexts/AppContext";

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
    label: "Stake",
    path: "/stake",
  },
  {
    label: "Carteira",
    path: "/wallet",
  },
];

export const SideNav = () => {
  const { sideNavExpanded, setSideNavExpanded } = useAppContext();

  const handleCloseSideNav = () => {
    setSideNavExpanded(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      handleCloseSideNav();
    }
  };

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mt-16 top-0 z-40 xl:static xl:w-72"
      role="menu"
    >
      <div
        role="none"
        onKeyPress={handleKeyPress}
        onClick={() => handleCloseSideNav()}
        className={cx(
          "xl:hidden absolute w-full h-full bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm z-30 transition-all duration-500",
          !sideNavExpanded && "opacity-0"
        )}
      />
      <aside
        className={`bg-white w-5/6 md:w-2/6 overflow-hidden absolute h-full drop-shadow-xl drop border-r border-gray-200 z-40 transition-all duration-500 xl:transition-none xl:mx-0 xl:static xl:w-full ${
          sideNavExpanded ? "mx-0" : "-mx-full"
        }`}
      >
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
    </div>
  );
};
