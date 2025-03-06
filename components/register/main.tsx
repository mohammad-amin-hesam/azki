"use client";

import { RegisterForm } from "./forms/form";

export function Main() {
  return (
    <main className="container mx-auto flex flex-col gap-[32px] py-[80px] lg:my-[50px]">
      <h2 className="text-[18px] font-bold md:text-[28px]">
        ثبت نام
      </h2>
      <RegisterForm />
    </main>
  );
}
