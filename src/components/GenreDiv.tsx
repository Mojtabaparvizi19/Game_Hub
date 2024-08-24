import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGameStore from "../Zstore/store";
import useGenre from "../hooks/useGenre";
import imageUrl from "../services/imageUrl";

function GenreDiv() {
  const { data, isLoading, error } = useGenre();
  const genreId = useGameStore((select) => select.gameQuery.genreId);
  const setGenreId = useGameStore((select) => select.setGenreId);

  return (
    <div>
      <Heading fontSize={"20px"} marginTop={"90px"} as={"h3"}>
        Genres
      </Heading>
      <List marginTop={5}>
        {error && (
          <ListItem>
            <Text>{error.message}</Text>
          </ListItem>
        )}

        {isLoading && <Spinner />}
        {data?.results.map((genre) => (
          <HStack key={genre.id}>
            <Image
              objectFit={"cover"}
              borderRadius={"5px"}
              boxSize={"35px"}
              src={imageUrl(genre.image_background)}
            />
            <ListItem
              cursor={"pointer"}
              onClick={
                () => setGenreId(genre.id)
                // handleGenre(genre)
              }
              paddingY={"10px"}
              key={genre.id}
            >
              <Text
                borderRadius={5}
                width={"auto"}
                padding={0.5}
                bgColor={genre.id === genreId ? "gray.500" : "none"}
                fontSize={"15px"}
              >
                {genre.name}
              </Text>
            </ListItem>
          </HStack>
        ))}
      </List>
    </div>
  );
}

export default GenreDiv;
