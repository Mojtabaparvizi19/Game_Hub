import { useQuery } from "@tanstack/react-query";
import ApiRequest from "../services/apiClient";

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
    staleTime: 24 * 60 * 60 * 1000,
  });

  return { data, error, isLoading };
}

export default usePlatform;
