"use client";

import { useContext } from "react";
import { AuthContext } from "../providers/auth-provider";
import Image from "next/image";
import Link from "next/link";

export function AuthLink() {
  const { user } = useContext(AuthContext);

  return user ? (
    <span className="flex items-center gap-[8px]">
      <Image src={"/icons/user.svg"} alt="" width={24} height={24} />
      {user.firstName} {user.lastName}
    </span>
  ) : (
    <Link href={"/register"}>ثبت نام</Link>
  );
}
