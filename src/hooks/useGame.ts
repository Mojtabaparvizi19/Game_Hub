import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiRequest from "../services/apiClient";
import { DataProps } from "../services/apiClient";
import ms from "ms";

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
  const request = new ApiRequest<ResultProp>("/games");
  return useInfiniteQuery<DataProps<ResultProp>, Error>({
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
