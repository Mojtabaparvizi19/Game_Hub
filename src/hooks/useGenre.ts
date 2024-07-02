import useData from "./useData";

export interface GenreResultProps {
  id: number;
  name: string;
  slug: string;
}

function useGenre() {
  const { data } = useData<GenreResultProps>("/genres");

  return { data };
}

export default useGenre;
