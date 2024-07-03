import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreGrid from "./components/GenreGrid";
import { useState } from "react";
import { GenreResultProps } from "./hooks/useGenre";

function App() {
  const [chosenGenre, setChosenGenre] = useState<GenreResultProps | null>(null);
  return (
    <>
      <Grid
        // justifyContent={"center"}
        templateAreas={{
          base: `"nav" "main"`,

          lg: `"nav  nav" 
               "side main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem area={"main"}>
          <GameGrid selectedGenre={chosenGenre} />
        </GridItem>

        <Show above="lg">
          <GridItem padding={6} area={"side"}>
            <GenreGrid
              selectedGenre={chosenGenre}
              shareGenre={(genre) => setChosenGenre(genre)}
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
