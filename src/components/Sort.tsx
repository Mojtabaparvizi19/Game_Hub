import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// interface Props {
//   handleSort: () => void;
// }

function Sort() {
  return (
    <>
      <Menu>
        <MenuButton marginX={5} rightIcon={<BsChevronDown />} as={Button}>
          sort by: Item
        </MenuButton>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Sort;
