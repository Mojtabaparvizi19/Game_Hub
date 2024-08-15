import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import ApiRequest from "../services/apiClient";

export interface GenreResultProps {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
const request = new ApiRequest<GenreResultProps>("/genres").get();

function useGenre() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["genres"],
    queryFn: () => request,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genre.length, results: genre },
  });

  return { data, isLoading, error };
}

export default useGenre;
