// import { GameQuery } from "../App";
import useGameStore from "../Zstore/store";
import useGenre from "./useGenre";
import usePlatform from "./usePlatform";

// interface Props {
//   gameQuery: GameQuery;
// }

function useLookUp() {
  const gameQuery = useGameStore((s) => s.gameQuery);
  const { data: platforms } = usePlatform();
  const { data: genres } = useGenre();

  const platform = platforms?.results.find(
    (platform) => gameQuery.platformId === platform.id
  );
  const genre = genres?.results.find((genre) => gameQuery.genreId === genre.id);

  return {
    genre,
    platform,
  };
}

export default useLookUp;
