"use client";

import { ComponentProps } from "react";

export enum ButtonVariant {
  primary = "primary",
  outline = "outline",
}

export type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof typeof ButtonVariant;
};

export const buttonVariant: Record<
  keyof typeof ButtonVariant,
  { className: string }
> = {
  primary: {
    className:
      "bg-primary enabled:hover:bg-primary/80 text-white disabled:opacity-[0.5] disabled:opacity-[0.5] disabled:cursor-not-allowed",
  },
  outline: {
    className:
      "disabled:opacity-[0.5] disabled:cursor-not-allowed border-primary border enabled:hover:bg-primary text-primary enabled:hover:text-white",
  },
};

export function Button({
  className = "",
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${buttonVariant[variant].className} h-[60px] w-[180px] cursor-pointer
        rounded-[48px] transition-all ${className}`}
    >
      {children}
    </button>
  );
}
