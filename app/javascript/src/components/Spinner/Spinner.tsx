import type { FC } from "react";
import React from "react";
import cs from "classnames";

import spinner from "../../assets/vectors/spinner.svg";

type Props = {
  width?: string;
};

export const Spinner: FC<Props> = ({ width }) => {
  return (
    <img
      className={cs("", width ? `h-${width} w-${width}` : "h-20 w-20")}
      alt="loading spinner"
      src={spinner}
    />
  );
};
