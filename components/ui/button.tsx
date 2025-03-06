"use client";

import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-primary h-[60px] w-[180px] cursor-pointer rounded-[48px] text-white
        ${className || ""}`}
    >
      {children}
    </button>
  );
}
