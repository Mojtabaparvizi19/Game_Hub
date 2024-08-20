import { useQuery } from "@tanstack/react-query";
import ApiRequest, { DataProps } from "../services/apiClient";
import genre from "../data/genre";
import ms from "ms";

export interface GenreResultProps {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
const request = new ApiRequest<GenreResultProps>("/genres").get();

function useGenre() {
  // const queryClient = useQueryClient();
  return useQuery<DataProps<GenreResultProps>, Error>({
    queryKey: ["genres"],
    queryFn: () => request,
    staleTime: ms("24h"), // 24h
    initialData: genre,
  });
}

export default useGenre;
