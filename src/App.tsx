import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreGrid from "./components/GenreGrid";
import { useState } from "react";
import { GenreResultProps } from "./hooks/useGenre";
import Platform from "./components/Pltaform";
import { PlatformProp } from "./hooks/usePlatform";
import Sort from "./components/Sort";

export interface GameQuery {
  genre: GenreResultProps | null;
  platform: PlatformProp | null;
  ordering: string;
  input: string;
}

function App() {
  // const [chosenGenre, setChosenGenre] = useState<GenreResultProps | null>(null);
  // const [selectedPlatform, setPlatform] = useState<PlatformProp | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar handle={(input) => setGameQuery({ ...gameQuery, input })} />
        </GridItem>

        <GridItem area={"main"}>
          <HStack>
            <Platform
              handlePlatform={(platform: PlatformProp) => {
                // setPlatform(platform);
                setGameQuery({ ...gameQuery, platform });
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
              selectedGenre={gameQuery.genre}
              shareGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
