import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface GameProp {
  count: number;
  next: string;
  previous: string;
  results: ResultProps[];
}

interface ResultProps {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  playtime: number;
}

function GameGrid() {
  const [games, setGames] = useState<ResultProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameProp>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}> {game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
