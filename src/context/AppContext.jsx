import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("users"));
    if (localData && localData.length !== 0) {
      console.log("Re-creating context from the local storage data");
      setUsers(localData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <AppContext.Provider value={{ users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};
