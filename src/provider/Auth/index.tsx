import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { IChildren, IDataAuth, IDataUser } from "../dtos";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext<IDataAuth>({} as IDataAuth);

export const AuthProvider = ({ children }: IChildren) => {
  const [auth, setAuth] = useState<string>("");

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("@mind/mobile");
      const tokenUser = JSON.parse(token!);
      setAuth(tokenUser);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
