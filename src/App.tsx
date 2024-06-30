import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
          <GridItem area={"main"} bg={"green"}>
            Main
          </GridItem>
        </Show>

        <GridItem area={"side"} bg={"yellow"}>
          aside
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
