import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { DataProps } from "../services/apiClient";
import genre from "../data/genre";

export interface GenreResultProps {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

function useGenre() {
  const { data, isLoading, error } = useQuery<
    DataProps<GenreResultProps>,
    Error
  >({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<DataProps<GenreResultProps>>("/genres")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genre.length, results: genre },
  });

  return { data, isLoading, error };
}

export default useGenre;
