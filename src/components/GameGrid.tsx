import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import LoadSkeleton from "./LoadSkeleton";
import StyleBox from "./StyleBox";
function GameGrid() {
  const { error, games, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((item) => (
            <StyleBox>
              <LoadSkeleton key={item} />{" "}
            </StyleBox>
          ))}

        {games.map((game) => (
          <StyleBox>
            <GameCard game={game} key={game.id} />
          </StyleBox>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
