import { Box } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Prop {
  id: number;
}

function GameTrailer({ id }: Prop) {
  const { data, isLoading, error } = useTrailer(id);
  console.log(data);
  const first = data?.results[0];
  if (isLoading) return null;

  if (error) throw error;
  return first ? (
    <Box>
      <video src={first?.data[480]} poster={first?.preview} controls />
    </Box>
  ) : null;
}

export default GameTrailer;
