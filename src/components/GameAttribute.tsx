import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameProp } from "../hooks/useGame";
import CriticScore from "./CriticScore";
import GameDetailAtrr from "./GameDetailAtrr";

interface Prop {
  game: GameProp;
}

function GameAttribute({ game }: Prop) {
  return (
    <SimpleGrid columns={2}>
      <GameDetailAtrr term="Platfrom">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameDetailAtrr>

      <GameDetailAtrr term="MetaScore">
        <CriticScore score={game.metacritic} />
      </GameDetailAtrr>

      <GameDetailAtrr term="Platfrom">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameDetailAtrr>

      <GameDetailAtrr term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameDetailAtrr>
    </SimpleGrid>
  );
}

export default GameAttribute;
