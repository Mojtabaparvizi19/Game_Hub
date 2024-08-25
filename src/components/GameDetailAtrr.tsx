import { ReactNode } from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

function GameDetailAtrr({ term, children }: Props) {
  return (
    <Box padding={5}>
      <Heading paddingY={3} fontSize={"20px"} color={"gray.500"}>
        {term}
      </Heading>
      <Text>{children}</Text>
    </Box>
  );
}

export default GameDetailAtrr;
