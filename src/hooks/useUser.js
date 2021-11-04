import React, { useContext } from "react";
import token from "../constants/token";
import { UserContext } from "../context/UserContext";

export default function useUser() {
  const { user, setUser } = useContext(UserContext);

  React.useEffect(() => {
    async function fetchUser() {
      try {
        let request = await fetch(
          "https://coding-challenge-api.aerolab.co/user/me",
          { 
            headers: { 
              Authorization: `Bearer ${token}` 
            } 
          }
        );
        let res = await request.json();
        setUser(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser()
  }, [])
  
  const restCoints = (points) => {
    setUser({
      ...user,
      points,
    });
  };

  const boostCoins = (points) => {
    points = points + user.points
    setUser({
      ...user,
      points,
    });
  };
  return { user, restCoints, boostCoins };
}
