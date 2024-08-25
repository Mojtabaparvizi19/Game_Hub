import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <HStack padding="20px">
        <Link to="/">
          <Image
            boxSize="65px"
            src={logo}
            objectFit={"cover"}
            title="Click to go home"
          />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
