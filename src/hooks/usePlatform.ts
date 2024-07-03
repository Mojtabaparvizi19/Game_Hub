import useData from "./useData";

export interface PlatformProp {
  id: number;
  name: string;
  slug: string;
}

function usePlatform() {
  const { data, error, isLoading } = useData<PlatformProp>(
    "platforms/lists/parents"
  );

  return { data, error, isLoading };
}

export default usePlatform;
