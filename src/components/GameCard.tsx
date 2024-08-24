import { Card, CardBody, HStack, Heading, Image, Box } from "@chakra-ui/react";
import { GameProp } from "../hooks/useGame";
import PlatFormIcon from "./PlatFormIcon";
import CriticScore from "./CriticScore";
import imageUrl from "../services/imageUrl";
import Emoji from "./Emoji";

interface Props {
  game: GameProp;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card>
        <Image src={imageUrl(game.background_image)} />
        <CardBody>
          <Heading textAlign="center" fontSize={15}>
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <PlatFormIcon platforms={game.parent_platforms} />

            <Box>
              <HStack>
                <Emoji rating={game.rating_top} />
                <CriticScore score={game.metacritic} />
              </HStack>
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
