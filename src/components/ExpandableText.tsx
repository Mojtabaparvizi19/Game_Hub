import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  if (!children) return null;
  return (
    <div>
      <Text>{isExpanded ? children : children.slice(0, 300) + "..."}</Text>
      {children.length > 300 && (
        <Button
          size={"xs"}
          color={"black"}
          colorScheme={"yellow"}
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read All"}
        </Button>
      )}
    </div>
  );
}

export default ExpandableText;
