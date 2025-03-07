"use client";

import { Button } from "@/components/ui/button";
import { FormField } from "./form-field";
import { useRegister } from "../hooks/use-register";

export function RegisterForm() {
  const { errors, register, submitUserRegister } = useRegister();

  return (
    <form
      className="flex flex-col gap-[16px] lg:gap-[32px]"
      onSubmit={submitUserRegister}
      autoComplete="off"
    >
      <div className="flex w-full flex-col gap-[16px] lg:flex-row lg:gap-[32px]">
        <FormField
          placeholder="نام"
          message={errors.firstName?.message}
          {...register("firstName")}
        />
        <FormField
          placeholder="نام خانوادگی"
          message={errors.lastName?.message}
          {...register("lastName")}
        />
      </div>
      <FormField
        placeholder="شماره موبایل"
        type="number"
        message={errors.mobile?.message}
        {...register("mobile")}
      />
      <FormField
        placeholder="رمز عبور"
        type="password"
        autoComplete={"new-password"}
        message={errors.password?.message}
        {...register("password")}
      />
      <div className="flex justify-end">
        <Button variant={"primary"}>ثبت نام</Button>
      </div>
    </form>
  );
}
