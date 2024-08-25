import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import useGameDetail from "../hooks/useGameDetail";

function GameDetailPage() {
  const { data: game, isLoading, error } = useGameDetail();

  if (isLoading) return <Spinner />;
  if (error || !game) return <Text>{error.message}</Text>;
  const description = game?.description_raw;
  return (
    <Box padding={10}>
      <Heading>{game.name}</Heading>
      <Text>
        <ExpandableText>{description}</ExpandableText>
      </Text>

      <GameAttribute game={game} />
    </Box>
  );
}

export default GameDetailPage;
