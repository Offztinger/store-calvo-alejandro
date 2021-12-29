import React, { createContext, useState } from "react";
import token from "../constants/token";

let header = { headers: { Authorization: `Bearer ${token}` } };

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //Se instancia un estado local para que en el contexto se puedan usar estás variables de forma global
  const [user, setUser] = useState([]);
  const [history, setHistory] = useState([{}]);
  //Se hace el fetch directamente para poder mantener actualizado constantemente el usuario
  //Al usar una APIFake puedes obviar y no utilizar fetch si no un JSON
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
    fetchHistory();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, history, setHistory }}>
      {children}
    </UserContext.Provider>
  );
};
