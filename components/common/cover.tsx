"use client";

import Image from "next/image";
import { ComponentProps, Fragment } from "react";
import { CoverTitle } from "./cover-title";
import { Header } from "../layout/header";

export function Cover({
  className,
  children,
  title,
  ...props
}: ComponentProps<"div"> & { title?: string }) {
  return (
    <Fragment>
      <Header />
      <div
        {...props}
        className={`after:content-[' '] after:bg-secondary relative flex min-h-[100vh]
          flex-col overflow-hidden pb-[150px] after:absolute after:bottom-0
          after:left-0 after:z-[-1] after:h-[150px] after:w-full lg:flex-row
          lg:pb-0 lg:after:h-full lg:after:w-[400px] ${className}`}
      >
        <main className="flex-1 px-[24px] lg:px-0 lg:pr-[100px] xl:pr-[150px]">
          <div
            className="mx-auto flex w-full max-w-[600px] flex-col gap-[32px] pb-[40px]
              pt-[70px] lg:mt-[30px] lg:pb-0"
          >
            {title && <CoverTitle>{title}</CoverTitle>}
            {children}
          </div>
        </main>
        <div
          className="mr-auto mt-auto h-full w-full max-w-[300px] pl-[24px] sm:max-w-[500px]
            lg:pb-[70px] lg:pl-[70px] xl:max-w-[600px] xl:max-w-[650px]"
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
    </Fragment>
  );
}
