import { SimpleGrid } from "@chakra-ui/react";
import GenreDiv from "./GenreDiv";
import { GenreResultProps } from "../hooks/useGenre";

// interface Props {
//   shareGenre: (genre: GenreResultProps) => void;
//   selectedGenreId?: number;
// }

function GenreGrid() {
// { selectedGenreId, shareGenre }: Props
  return (
    <>
      <SimpleGrid
        justifyContent={"center"}
        column={{
          base: 1,
          md: 1,
        }}
      >
        <GenreDiv
        // selectedGenreId={selectedGenreId} handleGenre={shareGenre}
        />
      </SimpleGrid>
    </>
  );
}

export default GenreGrid;
