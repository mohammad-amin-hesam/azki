import { ReactNode } from "react";
import { RegisterValuesType } from "../register/forms/schemas/register-schema";

export interface AuthProviderProps {
  children: ReactNode;
}

export type User = RegisterValuesType | null;

export interface AuthType {
  user: User;
  setUser: (user: User) => unknown;
}
