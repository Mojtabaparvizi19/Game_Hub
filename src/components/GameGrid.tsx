import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

function GameGrid() {
  const { error, games } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Text>{game.name}</Text>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
