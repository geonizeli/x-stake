import type { MouseEvent } from "react";
import React from "react";
import cn from "classnames";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "dangeour";
};

const baseStyles =
  "cursor-pointer py-2 px-4 disabled:opacity-50 disabled:cursor-default text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";

const Component: React.ForwardRefRenderFunction<unknown, Props> = (props) => {
  const { className = "", variant = "primary", onClick, ...rest } = props;

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();

    if (onClick) {
      onClick(e);
    }
  };

  const variantStyle =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200"
      : "bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200";

  return (
    <button
      {...rest}
      className={cn(baseStyles, className, variantStyle)}
      onClick={(e) => handleClick(e)}
    />
  );
};

export const Button = React.forwardRef<unknown, Props>(Component);
