import useGameDetail from "../hooks/useGameDetail";
import { Text, Heading, Box, Spinner } from "@chakra-ui/react";

function GameDetailPage() {
  const { data: game, isLoading, error } = useGameDetail();

  console.log(game?.description_raw);
  if (isLoading) return <Spinner />;
  if (error || !game) return <Text>{error.message}</Text>;

  return (
    <Box padding={10}>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
}

export default GameDetailPage;
