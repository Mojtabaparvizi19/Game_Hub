import { List, ListItem, Text, HStack, Image, Spinner } from "@chakra-ui/react";
import imageUrl from "../services/imageUrl";
import useGenre, { GenreResultProps } from "../hooks/useGenre";

interface Props {
  handleGenre: (genre: GenreResultProps) => void;
}

function GenreDiv({ handleGenre }: Props) {
  const { data, isLoading, error } = useGenre();

  return (
    <div>
      <List>
        {error && (
          <ListItem>
            <Text>{error}</Text>
          </ListItem>
        )}
        {isLoading && <Spinner />}
        {data.map((genre) => (
          <HStack key={genre.id}>
            <Image
              borderRadius={"5px"}
              boxSize={"35px"}
              src={imageUrl(genre.image_background)}
            />
            <ListItem
              cursor={"pointer"}
              onClick={() => {
                handleGenre(genre);
              }}
              paddingY={"10px"}
              key={genre.id}
            >
              <Text fontSize={"15px"}>{genre.name}</Text>
            </ListItem>
          </HStack>
        ))}
      </List>
    </div>
  );
}

export default GenreDiv;
