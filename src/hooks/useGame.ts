import useData from "./useData";

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

function useGame() {
  const { data, error, isLoading } = useData<ResultProp>("/games");
  return { data, error, isLoading };
}

export default useGame;
