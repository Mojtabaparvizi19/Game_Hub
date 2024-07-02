import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
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
        <Show below="md">
          <GridItem area={"side"} bg={"gray"}>
            aside
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
