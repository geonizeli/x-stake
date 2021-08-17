import type { FC } from "react";
import React from "react";

export const Header: FC = ({ children }) => {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-green-300 to-green-400 grid place-items-center">
      {children}
    </div>
  );
};
