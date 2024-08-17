import { useQuery } from "@tanstack/react-query";
import ApiRequest from "../services/apiClient";
import ms from "ms";

export interface PlatformProp {
  id: number;
  name: string;
  slug: string;
}
const request = new ApiRequest<PlatformProp>("/platforms/lists/parents").get();

function usePlatform() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["platform"],
    queryFn: () => request,
    staleTime: ms("24h"),
  });

  return { data, error, isLoading };
}

export default usePlatform;
