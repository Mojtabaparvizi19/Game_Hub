import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image boxSize="65px" src={logo} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
