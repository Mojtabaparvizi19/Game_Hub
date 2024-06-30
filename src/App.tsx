import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" " side main"`,
        }}
      >
        <GridItem area={"nav"} bg={"red"}>
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area={"side"} bg={"green"}>
            blue
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"yellow"}>
          blue
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
