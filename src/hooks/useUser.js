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
  return { fetchUser, user };
}
