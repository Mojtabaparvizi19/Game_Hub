import { useInfiniteQuery } from "@tanstack/react-query";
import ApiRequest from "../services/apiClient";
import { DataProps } from "../services/apiClient";
import ms from "ms";
import useGameStore from "../Zstore/store";
import { GenreResultProps } from "./useGenre";

export interface GameProp {
  metacritic: number;
  id: number;
  name: string;
  slug: string;
  genres: GenreResultProps[];
  background_image: string;
  parent_platforms: { platform: ParentProps }[];
  rating_top: number;
  publishers: Publisher[];
  description_raw: string;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface ParentProps {
  id: number;
  name: string;
  slug: string;
}
const request = new ApiRequest<GameProp>("/games");
function useGame() {
  const gameQuery = useGameStore((s) => s.gameQuery);

  return useInfiniteQuery<DataProps<GameProp>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      request.get({
        params: {
          parent_platforms: gameQuery.platformId,
          genres: gameQuery.genreId,
          ordering: gameQuery.ordering,
          search: gameQuery.input,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}

export default useGame;
