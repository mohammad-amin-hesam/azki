"use client";

import { ComponentProps } from "react";

export type InputProps = ComponentProps<"input">;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={`duration-50 focus:border-primary h-[60px] rounded-[4px] border
        border-gray-300 px-[16px] transition-all focus:outline-none ${
        className || "" }`}
    />
  );
}
