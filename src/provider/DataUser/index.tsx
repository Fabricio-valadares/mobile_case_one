import React from "react";
import { createContext, useState } from "react";
import { IChildren, IDataUserContext, IDataUserUpdate } from "../dtos";

export const DataUserContext = createContext<IDataUserContext>(
  {} as IDataUserContext
);

export const DataUserProvider = ({ children }: IChildren) => {
  const [dataUser, setDataUser] = useState<IDataUserUpdate>(
    {} as IDataUserUpdate
  );

  return (
    <DataUserContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </DataUserContext.Provider>
  );
};
