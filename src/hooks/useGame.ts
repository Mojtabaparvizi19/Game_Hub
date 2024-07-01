import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface GameProp {
  count: number;
  next: string;
  previous: string;
  results: ResultProps[];
}

export interface ResultProps {
  id: number;
  name: string;
  background_image: string;
}
function useGame() {
  const [games, setGames] = useState<ResultProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameProp>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error, setGames, setError };
}

export default useGame;
