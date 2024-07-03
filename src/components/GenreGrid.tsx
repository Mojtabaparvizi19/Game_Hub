import { SimpleGrid } from "@chakra-ui/react";
import GenreDiv from "./GenreDiv";

function GenreGrid() {
  return (
    <>
      <SimpleGrid
        justifyContent={"center"}
        column={{
          base: 1,
          md: 1,
        }}
      >
        <GenreDiv />
      </SimpleGrid>
    </>
  );
}

export default GenreGrid;
