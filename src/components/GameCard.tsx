import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { ResultProps } from "../hooks/useGame";

interface Props {
  game: ResultProps;
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
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
