"use client";

import Image from "next/image";
import { ComponentProps } from "react";

export function Cover({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`after:content-[' '] after:bg-secondary relative h-[100vh]
        overflow-hidden after:absolute after:bottom-0 after:left-0
        after:h-[150px] after:w-full lg:after:h-full lg:after:w-[400px]
        ${className}`}
    >
      {children}
      <div
        className="fixed bottom-[130px] left-[24px] z-[5] w-full max-w-[300px]
          sm:max-w-[500px] lg:bottom-[60px] lg:left-[60px] lg:max-w-[700px]"
      >
        <Image
          src={"/icons/car-green.svg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
