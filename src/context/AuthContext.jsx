import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const item = sessionStorage.getItem("user");
      return item ? JSON.parse(item) : undefined;
    } catch (err) {
      toast.error(err.message);

      return undefined;
    }
  });

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function removeUser() {
    sessionStorage.removeItem("user");
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{ removeUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
