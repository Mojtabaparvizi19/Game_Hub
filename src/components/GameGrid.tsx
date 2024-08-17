import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import LoadSkeleton from "./LoadSkeleton";
import StyleBox from "./StyleBox";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

        {data?.pages.map((page) => (
          <React.Fragment>
            {page.results.map((game) => (
              <StyleBox key={game.id}>
                <GameCard game={game} key={game.id} />
              </StyleBox>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          marginBottom={5}
          marginLeft={5}
          width={"100px"}
        >
          {isFetchingNextPage ? <Spinner size={"md"} /> : "Load More"}
        </Button>
      )}
    </>
  );
}

export default GameGrid;
