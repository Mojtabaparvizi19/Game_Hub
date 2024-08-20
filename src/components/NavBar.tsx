import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <>
      <HStack padding="10px">
        <Image boxSize="65px" src={logo} />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
