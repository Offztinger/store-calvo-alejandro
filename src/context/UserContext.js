import React, { createContext, useState } from "react";
import token from "../constants/token";

let header = { headers: { Authorization: `Bearer ${token}` } };

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [history, setHistory] = useState([{}]);

  React.useEffect(() => {
    async function fetchHistory() {
      try {
        let request = await fetch(
          "https://coding-challenge-api.aerolab.co/user/history",
          header
        );
        let res = await request.json();
        setHistory(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchHistory()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, history, setHistory }}>
      {children}
    </UserContext.Provider>
  );
};
