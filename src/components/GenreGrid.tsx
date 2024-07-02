import { SimpleGrid } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import GenreDiv from "./GenreDiv";

function GenreGrid() {
  const { data } = useGenre();
  return (
    <>
      <SimpleGrid
        justifyContent={"center"}
        column={{
          base: 1,
          md: 1,
        }}
      >
        <GenreDiv genres={data} />
      </SimpleGrid>
    </>
  );
}

export default GenreGrid;
