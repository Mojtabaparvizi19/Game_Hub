import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { DataProps } from "../services/apiClient";

export interface PlatformProp {
  id: number;
  name: string;
  slug: string;
}

function usePlatform() {
  const { data, error, isLoading } = useQuery<DataProps<PlatformProp>, Error>({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get<DataProps<PlatformProp>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

  return { data, error, isLoading };
}

export default usePlatform;
