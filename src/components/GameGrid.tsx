import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import LoadSkeleton from "./LoadSkeleton";
import StyleBox from "./StyleBox";
function GameGrid() {
  const { error, data, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={5}
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 3,
          "2xl": 4,
        }}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((item) => (
            <StyleBox key={item}>
              <LoadSkeleton key={item} />
            </StyleBox>
          ))}

        {data.map((game) => (
          <StyleBox key={game.id}>
            <GameCard game={game} key={game.id} />
          </StyleBox>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
