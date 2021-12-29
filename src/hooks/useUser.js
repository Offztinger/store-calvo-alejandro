import React, { useContext } from "react";
import token from "../constants/token";
//Import del contexto para uso de variables globales
import { UserContext } from "../context/UserContext";

export default function useUser() {
  //Destructuring del contexto para uso de variables globales de forma local
  const { user, setUser } = useContext(UserContext);
  //Uso de useEffect() para hacer el respectivo async await del fetch y el retorno de los productos en la API
  //Al usar una APIFake puedes eliminar el fetch y asumir que solo se está instanciando un setData con la información de un JSON.
  React.useEffect(() => {
    async function fetchUser() {
      try {
        let request = await fetch(
          "https://coding-challenge-api.aerolab.co/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let res = await request.json();
        setUser(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);
  //Metodos para sostener las monedas en el aplicativo
  const restCoints = (points) => {
    setUser({
      ...user,
      points,
    });
  };
  //Metodo para aumento de monedas en el aplicativo
  const boostCoins = (points) => {
    points = points + user.points;
    setUser({
      ...user,
      points,
    });
  };
  return { user, restCoints, boostCoins };
}
