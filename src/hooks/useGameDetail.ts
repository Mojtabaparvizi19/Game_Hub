import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ApiRequest from "../services/apiClient";

interface DetailProp {
  id: number;
  description_raw: string;
  name: string;
}

function useGameDetail() {
  const params = useParams();
  const slug = params.slug;

  const request = new ApiRequest<DetailProp>("/games");

  return useQuery<DetailProp, Error>({
    queryKey: ["details", slug],
    queryFn: () => request.getDetail(slug!),
  });
}
export default useGameDetail;
