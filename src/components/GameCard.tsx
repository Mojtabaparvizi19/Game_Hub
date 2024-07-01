import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { ResultProp } from "../hooks/useGame";
import PlatFormIcon from "./PlatFormIcon";

interface Props {
  game: ResultProp;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card margin={"20px"} borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />

        <CardBody>
          <Heading textAlign="center" fontSize={15}>
            {game.name}
          </Heading>
          <PlatFormIcon platforms={game.parent_platforms} />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
