import { HStack, Icon, Badge } from "@chakra-ui/react";
import { ParentProps } from "../hooks/useGame";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface PlatFormProps {
  platforms: { platform: ParentProps }[];
}

function PlatFormIcon({ platforms }: PlatFormProps) {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };
  return (
    <HStack marginY={2}>
      <Badge
        colorScheme="gray.50"
        width={"auto"}
        height={"auto"}
        padding={2}
        borderRadius={4}
      >
        {platforms.map(({ platform }) => (
          <Icon
            margin={1}
            boxSize={4}
            key={platform.id}
            color={"gray.500"}
            as={icons[platform.slug]}
          />
        ))}
      </Badge>
    </HStack>
  );
}

export default PlatFormIcon;
