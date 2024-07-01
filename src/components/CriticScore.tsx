import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 81 ? "green" : score > 70 ? "yellow" : "red";
  return (
    <>
      <Badge
        borderRadius={"4px"}
        colorScheme={color}
        paddingX={"10px"}
        fontSize={"15px"}
      >
        {score}
      </Badge>
    </>
  );
}

export default CriticScore;
