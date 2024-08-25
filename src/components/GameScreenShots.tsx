import useScreanShots from "../hooks/useScreanShots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Prop {
  gameId: number;
}

function GameScreenShots({ gameId }: Prop) {
  const { data, isLoading, error } = useScreanShots(gameId);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={2}
    >
      {data.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShots;
