import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function StyleBox({ children }: Props) {
  return (
    <Box overflow={"hidden"} borderRadius={"10px"}>
      {children}
    </Box>
  );
}

export default StyleBox;
