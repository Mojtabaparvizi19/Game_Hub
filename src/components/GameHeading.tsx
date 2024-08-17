import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useLookUp from "../hooks/useLookUp";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { genre, platform } = useLookUp({ gameQuery });
  const heading = `${platform?.id || ""} ${genre?.name || ""} Games`;
  return (
    <>
      <Heading paddingLeft={5} marginBottom={5} as={"h2"}>
        {heading}
      </Heading>
    </>
  );
}

export default GameHeading;
