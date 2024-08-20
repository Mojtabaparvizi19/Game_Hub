import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGameStore from "../Zstore/store";
import usePlatform from "../hooks/usePlatform";

function Pltaform() {
  const setPlatformId = useGameStore((select) => select.setPlatformId);

  const { data, error } = usePlatform();
  const [platformName, setPlatformName] = useState("Platforms");
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton marginX={5} rightIcon={<BsChevronDown />} as={Button}>
          {platformName}
        </MenuButton>
        <MenuList>
          {data?.results.map((eachPlatform) => (
            <MenuItem
              onClick={() => {
                setPlatformId(eachPlatform.id);
                setPlatformName(eachPlatform.name);
              }}
              key={eachPlatform.id}
            >
              {eachPlatform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default Pltaform;
