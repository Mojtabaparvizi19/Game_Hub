import genre from "../data/genre";

export interface GenreResultProps {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

function useGenre() {
  const { data, isLoading, error } = {
    data: genre,
    isLoading: false,
    error: null,
  };

  return { data, isLoading, error };
}

export default useGenre;
