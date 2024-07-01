import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

function GameGrid() {
  const { error, games } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
