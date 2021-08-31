import type { FC } from "react";
import React from "react";
import cs from "classnames";

type Props = {
  sizeClasses?: string;
};

export const Spinner: FC<Props> = ({ sizeClasses }) => {
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div
        style={{ borderTopColor: "transparent" }}
        className={cs(
          "border-solid animate-spin  rounded-full border-gray-300 border-8",
          sizeClasses ?? "h-20 w-20"
        )}
      />
    </div>
  );
};
