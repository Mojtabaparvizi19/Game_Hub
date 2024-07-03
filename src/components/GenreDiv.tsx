import { List, ListItem, Text, HStack, Image, Spinner } from "@chakra-ui/react";
import imageUrl from "../services/imageUrl";
import useGenre, { GenreResultProps } from "../hooks/useGenre";

interface Props {
  handleGenre: (genre: GenreResultProps) => void;
  selectedGenre: GenreResultProps | null;
}

function GenreDiv({ selectedGenre, handleGenre }: Props) {
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
              onClick={() => handleGenre(genre)}
              paddingY={"10px"}
              key={genre.id}
            >
              <Text
                borderRadius={5}
                width={"auto"}
                padding={0.5}
                bgColor={genre.id === selectedGenre?.id ? "gray.500" : "none"}
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
