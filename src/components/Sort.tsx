import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

interface Props {
  handleSort: (value: string) => void;
}

function Sort({ handleSort }: Props) {
  const [name, setName] = useState("Relevence");
  const order = [
    { value: "", label: "Relevence" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-added", label: "Date Added" },
    { value: "rating", label: "Average rating" },
  ];
  return (
    <>
      <Menu>
        <MenuButton marginX={5} rightIcon={<BsChevronDown />} as={Button}>
          Sort by : {name}
        </MenuButton>
        <MenuList>
          {order.map((item) => (
            <MenuItem
              onClick={() => {
                setName(item.label);
                handleSort(item.value);
              }}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default Sort;
