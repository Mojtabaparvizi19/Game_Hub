import useData from "./useData";

export interface GenreResultProps {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

function useGenre() {
  const { data, isLoading, error } = useData<GenreResultProps>("/genres");

  return { data, isLoading, error };
}

export default useGenre;
