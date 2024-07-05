import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  handle: (input: string) => void;
}

function NavBar({ handle }: Props) {
  return (
    <>
      <HStack padding="10px">
        <Image boxSize="65px" src={logo} />
        <SearchInput handleSearch={handle} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
