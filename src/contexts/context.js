import React from "react";
import { useState } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState({
    title: "Зарегистрироваться в системе"
  });

  return (
    <Context.Provider value={{ data, setData }}>
      {children}
    </Context.Provider>
  );
};
export {ContextProvider, Context};