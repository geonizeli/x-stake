import * as React from "react";

export type HeaderProps = {};

export const Header = ({ children }: React.PropsWithChildren<HeaderProps>) => {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-green-300 to-green-400 grid place-items-center">
      {children}
    </div>
  );
};
