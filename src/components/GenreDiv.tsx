import { List, ListItem, Text, HStack, Image, Spinner } from "@chakra-ui/react";
import imageUrl from "../services/imageUrl";
import useGenre from "../hooks/useGenre";

function GenreDiv() {
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
          <HStack>
            <Image
              borderRadius={"5px"}
              boxSize={"35px"}
              src={imageUrl(genre.image_background)}
            />
            <ListItem paddingY={"10px"} key={genre.id}>
              <Text fontSize={"15px"}>{genre.name}</Text>
            </ListItem>
          </HStack>
        ))}
      </List>
    </div>
  );
}

export default GenreDiv;
