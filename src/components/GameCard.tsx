import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { ResultProp } from "../hooks/useGame";
import PlatFormIcon from "./PlatFormIcon";
import CriticScore from "./CriticScore";
import imageUrl from "../services/imageUrl";

interface Props {
  game: ResultProp;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card margin={"20px"} borderRadius={10} overflow="hidden">
        <Image src={imageUrl(game.background_image)} />
        <CardBody>
          <Heading textAlign="center" fontSize={15}>
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <PlatFormIcon platforms={game.parent_platforms} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
