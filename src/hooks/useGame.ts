import useData from "./useData";
import { GameQuery } from "../App";

export interface ResultProp {
  metacritic: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: ParentProps }[];
  rating_top: number;
}

export interface ParentProps {
  id: number;
  name: string;
  slug: string;
}

function useGame(gameQuery: GameQuery) {
  const { data, error, isLoading } = useData<ResultProp>(
    "/games",
    {
      params: {
        parent_platforms: gameQuery.platform?.id,
        genres: gameQuery.genre?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.input,
      },
    },
    [gameQuery]
  );
  return { data, error, isLoading };
}

export default useGame;
