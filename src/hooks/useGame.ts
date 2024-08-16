import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiRequest from "../services/apiClient";
import { DataProps } from "../services/apiClient";

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
const request = new ApiRequest<ResultProp>("/games");
function useGame(gameQuery: GameQuery) {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery<DataProps<ResultProp>, Error>({
      queryKey: ["games", gameQuery],
      queryFn: ({ pageParam = 1 }) =>
        request.get({
          params: {
            parent_platforms: gameQuery.platform?.id,
            genres: gameQuery.genre?.id,
            ordering: gameQuery.ordering,
            search: gameQuery.input,
            page: pageParam,
          },
        }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
    });
  return { data, error, isLoading, isFetchingNextPage, fetchNextPage };
}

export default useGame;
