import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "../auth-types";

export function useAuth() {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      if (pathname !== "/register") router.replace("/register");
    }
  }, []);

  return { user, setUser };
}
