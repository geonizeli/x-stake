import type { ChangeEvent } from "react";
import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const baseStyles =
  "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-3";

const Component: React.ForwardRefRenderFunction<unknown, Props> = (props) => {
  const { className = "", onChange, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    onChange(e);
  };

  return (
    <input
      {...rest}
      className={`${baseStyles} ${className}`}
      onChange={handleChange}
    />
  );
};

export const Input = React.forwardRef<unknown, Props>(Component);
