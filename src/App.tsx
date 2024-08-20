import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreGrid from "./components/GenreGrid";
import NavBar from "./components/NavBar";
import Platform from "./components/Pltaform";
import Sort from "./components/Sort";

function App() {
  return (
    <>
      <Grid
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
          <GameHeading />
          <HStack>
            <Platform />
            <Sort />
          </HStack>
          <GameGrid />
        </GridItem>

        <Show above="lg">
          <GridItem padding={6} area={"side"}>
            <GenreGrid />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
