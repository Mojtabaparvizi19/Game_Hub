import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
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
    </Box>
  );
}

export default GameDetailPage;
