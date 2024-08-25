import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import useGameDetail from "../hooks/useGameDetail";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

function GameDetailPage() {
  const { data: game, isLoading, error } = useGameDetail();

  if (isLoading) return <Spinner />;
  if (error || !game) return <Text>{error.message}</Text>;
  const description = game?.description_raw;
  return (
    <SimpleGrid spacing={4} columns={{ base: 1, md: 2 }} padding={10}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <Text>
          <ExpandableText>{description}</ExpandableText>
        </Text>
        <GameAttribute game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer id={game.id} />
        <GameScreenShots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetailPage;
