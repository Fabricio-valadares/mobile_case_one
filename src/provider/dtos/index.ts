import React, { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IDataAuth {
  auth: string;
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDataUserContext {
  dataUser: IDataUserUpdate;
  setDataUser: React.Dispatch<React.SetStateAction<IDataUserUpdate>>;
}

export interface IDataUserUpdate {
  name: string;
  email: string;
}
