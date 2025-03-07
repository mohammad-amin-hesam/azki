"use client";

import { createContext } from "react";
import { useAuth } from "./hooks/use-auth";
import { AuthProviderProps, AuthType } from "./auth-types";

export const AuthContext = createContext<AuthType>({
  user: null,
  setUser: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}
