import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { BsChevronDown } from "react-icons/bs";

function Pltaform() {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton marginX={5} rightIcon={<BsChevronDown />} as={Button}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((each) => (
            <MenuItem key={each.id}>{each.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default Pltaform;
