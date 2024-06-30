import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
        />
        <Text>Dark Mode</Text>
      </HStack>
    </>
  );
}

export default ColorModeSwitch;
