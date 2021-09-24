import { useContext } from "react";
import token from "../constants/token";
import { UserContext } from "../context/UserContext";

export default function useHistory() {
  const { history, setHistory } = useContext(UserContext);
  let header = { headers: { Authorization: `Bearer ${token}` } };
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
  return { fetchHistory, history };
}
