import { Heading } from "@chakra-ui/react";
import useLookUp from "../hooks/useLookUp";

function GameHeading() {
  const { genre, platform } = useLookUp();
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <>
      <Heading paddingLeft={5} marginBottom={5} as={"h2"}>
        {heading}
      </Heading>
    </>
  );
}

export default GameHeading;
