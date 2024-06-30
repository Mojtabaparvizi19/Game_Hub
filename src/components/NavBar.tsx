import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <>
      <HStack>
        <Image boxSize="65px" src={logo} />
        <Text>Navigation Bar</Text>
      </HStack>
    </>
  );
}

export default NavBar;
