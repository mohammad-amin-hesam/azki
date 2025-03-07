"use client";

import { ReactNode } from "react";

export interface CoverTitleProps {
  children: ReactNode;
}

export function CoverTitle({ children }: CoverTitleProps) {
  return (
    <h2
      className="my-[24px] text-center text-[22px] font-bold md:text-[28px] lg:my-0
        lg:text-right"
    >
      {children}
    </h2>
  );
}
