import { isPersian, isWeak } from "@/utils/forms";
import { z } from "zod";

export const registerFormSchema = z
  .object({
    firstName: z.string().nonempty("نام الزامی می‌باشد"),
    lastName: z.string().nonempty("نام خانوادگی الزامی می‌باشد"),
    mobile: z
      .string()
      .nonempty("شماره موبایل الزامی می‌باشد")
      .min(10, { message: "شماره موبایل وارد شده صحیح نمی‌باشد" })
      .max(12, { message: "شماره موبایل وارد شده صحیح نمی‌باشد" }),
    password: z.string().nonempty("رمز عبور الزامی می‌باشد"),
  })
  .superRefine(({ password, firstName, lastName }, ctx) => {
    if (!isPersian(firstName)) {
      ctx.addIssue({
        code: "custom",
        message: "نام را با حروف فارسی وارد کنید",
        path: ["firstName"],
      });
    }

    if (!isPersian(lastName)) {
      ctx.addIssue({
        code: "custom",
        message: "نام خانوادگی را با حروف فارسی وارد کنید",
        path: ["lastName"],
      });
    }

    if (isWeak(password)) {
      ctx.addIssue({
        code: "custom",
        message:
          "رمز عبور باید شامل حروف کوچک و بزر و کاراکتر خاص و عدد باشد",
        path: ["password"],
      });
    }
  });

export type RegisterValuesType = z.infer<typeof registerFormSchema>;

export const defaultRegisterValues: RegisterValuesType = {
  firstName: "",
  lastName: "",
  mobile: "",
  password: "",
};
