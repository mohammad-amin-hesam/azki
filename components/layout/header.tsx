"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed right-0 top-0 z-10 w-full">
      <div className="container mx-auto flex h-[80px] items-center justify-between">
        <div className="flex cursor-pointer">
          <Image
            src={"/icons/logo.svg"}
            alt="ازکی"
            width={17}
            height={17}
            priority={true}
          />
        </div>
        <h1 className="hidden text-[18px] font-semibold md:flex">
          سامانه مقایسه و خرید آنلاین بیمه
        </h1>
        <nav>
          <ul>
            <li>
              <Link href={"/register"}>ثبت نام</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
