import * as React from "react";
import cx from "classnames";
import { useAppContext } from "../contexts/AppContext";

type MenuItem = {
  label: string;
};

const MenuItems: MenuItem[] = [
  {
    label: "Início",
  },
  {
    label: "Stake",
  },
  {
    label: "Carteira",
  },
];


export const SideNav = () => {
  const { sideNavExpanded, setSideNavExpanded } = useAppContext()

  const handleCloseSideNav = () => {
    setSideNavExpanded(false);
  };

  return (
    <div className="fixed left-0 right-0 bottom-0 mt-16 top-0 z-40 xl:static xl:w-72">
      <div
        role="row"
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
            <li
              key={item.label}
              className="text-xl p-4 px-8 hover:bg-gray-100 cursor-pointer"
            >
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
