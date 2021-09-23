import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [history, setHistory] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser, history, setHistory }}>
      {children}
    </UserContext.Provider>
  );
};
