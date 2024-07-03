import { SimpleGrid } from "@chakra-ui/react";
import GenreDiv from "./GenreDiv";
import { GenreResultProps } from "../hooks/useGenre";

interface Props {
  shareGenre: (genre: GenreResultProps) => void;
}

function GenreGrid({ shareGenre }: Props) {
  return (
    <>
      <SimpleGrid
        justifyContent={"center"}
        column={{
          base: 1,
          md: 1,
        }}
      >
        <GenreDiv handleGenre={shareGenre} />
      </SimpleGrid>
    </>
  );
}

export default GenreGrid;
