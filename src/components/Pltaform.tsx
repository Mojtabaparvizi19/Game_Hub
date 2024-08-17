import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform, { PlatformProp } from "../hooks/usePlatform";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

interface Props {
  selectPlatformFun: (platform: PlatformProp) => void;
}

function Pltaform({ selectPlatformFun }: Props) {
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
                selectPlatformFun(eachPlatform);
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
