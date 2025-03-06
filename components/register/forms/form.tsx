"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  defaultRegisterValues,
  registerFormSchema,
  RegisterValuesType,
} from "./schemas/register-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterValuesType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: defaultRegisterValues,
  });

  const registerUser = (user: RegisterValuesType) => {
    console.log(user);
  };

  return (
    <form
      className="flex flex-col gap-[32px] lg:max-w-[600px]"
      onSubmit={handleSubmit(registerUser)}
      autoComplete="off"
    >
      <div className="flex w-full flex-col gap-[32px] lg:flex-row">
        <Input
          className="ld:flex-1"
          placeholder="نام"
          {...register("firstName")}
        />
        <Input
          className="ld:flex-1"
          placeholder="نام خانوادگی"
          {...register("lastName")}
        />
      </div>
      <Input
        placeholder="شماره موبایل"
        type="number"
        {...register("mobile")}
      />
      <Input
        placeholder="رمز عبور"
        type="password"
        autoComplete={"new-password"}
        {...register("password")}
      />
      <div className="flex justify-end">
        <Button>ثبت نام</Button>
      </div>
    </form>
  );
}
