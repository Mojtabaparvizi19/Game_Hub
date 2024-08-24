import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function StyleBox({ children }: Props) {
  return (
    <Box
      _hover={{
        transform: "scale(1.01)",
        transition: "transform 0.4s ease-in",
      }}
      overflow={"hidden"}
      borderRadius={"10px"}
    >
      {children}
    </Box>
  );
}

export default StyleBox;
