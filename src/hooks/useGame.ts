import { DataProps } from "../services/apiClient";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

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
  // const { data, error, isLoading } = useData<ResultProp>(
  //   "/games",
  //   {
  //     params: {
  //       parent_platforms: gameQuery.platform?.id,
  //       genres: gameQuery.genre?.id,
  //       ordering: gameQuery.ordering,
  //       search: gameQuery.input,
  //     },
  //   },
  //   [gameQuery]
  // );

  const { data, error, isLoading } = useQuery<DataProps<ResultProp>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<DataProps<ResultProp>>("/games", {
          params: {
            parent_platforms: gameQuery.platform?.id,
            genres: gameQuery.genre?.id,
            ordering: gameQuery.ordering,
            search: gameQuery.input,
          },
        })
        .then((res) => res.data),
  });
  return { data, error, isLoading };
}

export default useGame;
