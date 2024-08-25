import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ApiRequest from "../services/apiClient";

import { GameProp } from "./useGame";

function useGameDetail() {
  const params = useParams();
  const slug = params.slug;

  const request = new ApiRequest<GameProp>("/games");

  return useQuery<GameProp, Error>({
    queryKey: ["details", slug],
    queryFn: () => request.getDetail(slug!),
  });
}
export default useGameDetail;
