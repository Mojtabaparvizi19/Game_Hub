import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          sm: `"nav  nav" 
               "side main"`,
          lg: `"nav  nav" 
               "side main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem area={"main"}>
            <GameGrid />
          </GridItem>
        </Show>

        <GridItem area={"side"}>aside</GridItem>
      </Grid>
    </>
  );
}

export default App;
