import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../Zstore/store";
import { Outlet } from "react-router-dom";

// interface Props {
//   handleSearch: (input: string) => void;
// }

function SearchInput() {
  // { handleSearch }: Props
  const ref = useRef<HTMLInputElement>(null);
  const setInput = useGameStore((select) => select.setInput);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current !== null) {
            // handleSearch(ref.current.value);
            setInput(ref.current.value);
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            bg={"gray.600"}
            ref={ref}
            borderRadius={20}
            placeholder="Search Games..."
            variant={"field"}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
}

export default SearchInput;
