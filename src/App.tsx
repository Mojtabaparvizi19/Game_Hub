import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreGrid from "./components/GenreGrid";
import { useState } from "react";
import Platform from "./components/Pltaform";
import { PlatformProp } from "./hooks/usePlatform";
import Sort from "./components/Sort";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  ordering: string;
  input: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar handle={(input) => setGameQuery({ ...gameQuery, input })} />
        </GridItem>

        <GridItem area={"main"}>
          <GameHeading gameQuery={gameQuery} />
          <HStack>
            <Platform
              selectPlatformFun={(platform: PlatformProp) => {
                setGameQuery({ ...gameQuery, platformId: platform.id });
              }}
            />
            <Sort
              handleSort={(ordering) =>
                setGameQuery({ ...gameQuery, ordering })
              }
            />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>

        <Show above="lg">
          <GridItem padding={6} area={"side"}>
            <GenreGrid
              selectedGenreId={gameQuery.genreId}
              shareGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
