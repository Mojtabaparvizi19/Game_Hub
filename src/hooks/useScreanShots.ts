import { useQuery } from "@tanstack/react-query";
import ApiRequest, { DataProps } from "../services/apiClient";

interface ScreenShotProp {
  id: number;
  image: string;
  width: number;
  height: number;
}

function useScreanShots(gameId: number) {
  const request = new ApiRequest<ScreenShotProp>(
    `/games/${gameId}/screenshots`
  );
  return useQuery<DataProps<ScreenShotProp>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: request.get,
  });
}

export default useScreanShots;
