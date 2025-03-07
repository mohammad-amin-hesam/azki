import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  defaultRegisterValues,
  registerFormSchema,
  RegisterValuesType,
} from "../forms/schemas/register-schema";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useContext } from "react";
import { AuthContext } from "@/components/providers/auth-provider";

export function useRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValuesType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: defaultRegisterValues,
  });
  const auth = useContext(AuthContext);

  const router = useRouter();

  const registerUser = (user: RegisterValuesType) => {
    toast.success("ثبت نام موفق. به ازکی خوش‌آمدید 😊");
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/");
    auth.setUser(user);
  };

  return {
    register,
    submitUserRegister: handleSubmit(registerUser),
    errors,
  };
}
