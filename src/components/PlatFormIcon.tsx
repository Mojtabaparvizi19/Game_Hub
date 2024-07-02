import { HStack, Icon } from "@chakra-ui/react";
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

interface Props {
  platforms: { platform: ParentProps }[];
}

function PlatFormIcon({ platforms }: Props) {
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
      {platforms.map(({ platform }) => (
        <Icon key={platform.id} color={"gray.500"} as={icons[platform.slug]} />
      ))}
    </HStack>
  );
}

export default PlatFormIcon;
