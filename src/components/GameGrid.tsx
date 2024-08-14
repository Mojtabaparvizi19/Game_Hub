import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import LoadSkeleton from "./LoadSkeleton";
import StyleBox from "./StyleBox";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { error, data, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        padding={5}
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 3,
          "2xl": 4,
        }}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((item) => (
            <StyleBox key={item}>
              <LoadSkeleton key={item} />
            </StyleBox>
          ))}

        {data?.results.map((game) => (
          <StyleBox key={game.id}>
            <GameCard game={game} key={game.id} />
          </StyleBox>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
