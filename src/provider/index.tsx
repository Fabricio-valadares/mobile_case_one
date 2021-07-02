import React from "react";
import { AuthProvider } from "./Auth";
import { IChildren } from "./dtos";
import { DataUserProvider } from "./DataUser";

const Providers = ({ children }: IChildren) => {
  return (
    <AuthProvider>
      <DataUserProvider>{children}</DataUserProvider>
    </AuthProvider>
  );
};

export { Providers };
