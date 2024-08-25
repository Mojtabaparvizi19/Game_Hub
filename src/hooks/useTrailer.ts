import { useQuery } from "@tanstack/react-query";
import ApiRequest, { DataProps } from "../services/apiClient";

interface TrailerProps {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

function useTrailer(gameId: number) {
  const request = new ApiRequest<TrailerProps>(`/games/${gameId}/movies`);
  return useQuery<DataProps<TrailerProps>, Error>({
    queryKey: ["trailers", gameId],
    queryFn: request.get,
  });
}

export default useTrailer;
