import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreGrid from "./components/GenreGrid";

function App() {
  return (
    <>
      <Grid
        // justifyContent={"center"}
        templateAreas={{
          base: `"nav" "main"`,

          lg: `"nav  nav" 
               "side main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>

        <Show above="lg">
          <GridItem area={"side"}>
            genre
            <GenreGrid />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
