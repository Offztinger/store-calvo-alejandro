import { useContext } from "react";
import token from "../constants/token";
import { UserContext } from "../context/UserContext";

export default function useUser() {
  const { user, setUser } = useContext(UserContext);
  let header = { headers: { Authorization: `Bearer ${token}` } };
  async function fetchUser() {
    try {
      let request = await fetch(
        "https://coding-challenge-api.aerolab.co/user/me",
        header
      );
      let res = await request.json();
      setUser(res);
    } catch (error) {
      console.error(error);
    }
  }
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
  return { fetchUser, user, restCoints, boostCoins };
}
