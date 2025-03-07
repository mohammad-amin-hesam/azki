"use client";

import Image from "next/image";
import { ComponentProps } from "react";

export interface SelectButtonProps {
  title: string;
}

export function SelectButton({
  title,
  className,
  ...containerProps
}: SelectButtonProps & ComponentProps<"div">) {
  return (
    <div
      {...containerProps}
      className={`flex h-[150px] w-[150px] cursor-pointer flex-col items-center
        justify-center gap-[16px] rounded-[16px] border border-gray-200
        hover:bg-gray-50 hover:opacity-[0.5] ${className}`}
    >
      <Image
        src="/icons/insurance.svg"
        alt=""
        width={50}
        height={50}
      />
      <p className="text-[18px] font-semibold">{title}</p>
    </div>
  );
}
