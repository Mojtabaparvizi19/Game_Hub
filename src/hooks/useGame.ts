import useData from "./useData";
import { GenreResultProps } from "./useGenre";

export interface ResultProp {
  metacritic: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: ParentProps }[];
}

export interface ParentProps {
  id: number;
  name: string;
  slug: string;
}

function useGame(selectedGenre: GenreResultProps | null) {
  const { data, error, isLoading } = useData<ResultProp>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );
  return { data, error, isLoading };
}

export default useGame;
