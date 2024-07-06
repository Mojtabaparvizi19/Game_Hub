import eye from "../assets/bulls-eye.webp";
import thumb from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const mapObject: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumb, alt: "recommended" },
    5: { src: eye, alt: "awesome" },
  };

  return (
    <>
      <Image {...mapObject[rating]} boxSize={"25px"} />
    </>
  );
}

export default Emoji;
