import useData from "./useData";
import { GenreResultProps } from "./useGenre";
import { PlatformProp } from "./usePlatform";

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

function useGame(
  selectedGenre: GenreResultProps | null,
  selectPlatform: PlatformProp | null
) {
  const { data, error, isLoading } = useData<ResultProp>(
    "/games",
    {
      params: {
        parent_platforms: selectPlatform?.id,
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id, selectPlatform?.id]
  );
  return { data, error, isLoading };
}

export default useGame;
