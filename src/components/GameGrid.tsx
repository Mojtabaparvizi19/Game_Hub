import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import LoadSkeleton from "./LoadSkeleton";
import StyleBox from "./StyleBox";
import { Link } from "react-router-dom";

// interface Props {
//   gameQuery: GameQuery;
// }

function GameGrid() {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame();

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

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <StyleBox key={game.id}>
                <Link to={`/games/${game.slug}`}>
                  <GameCard game={game} key={game.id} />
                </Link>
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
