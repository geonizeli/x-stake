import * as React from "react";
import cx from "classnames";

export type ContainerProps = {
  className?: string;
};

export const Container = ({
  children,
  className,
}: React.PropsWithChildren<ContainerProps>) => {
  return (
    <div className="w-full flex items-center justify-center px-8 py-2 2xl:p-0">
      <div className={cx("max-w-5xl w-full flex flex-col", className)}>
        {children}
      </div>
    </div>
  );
};
