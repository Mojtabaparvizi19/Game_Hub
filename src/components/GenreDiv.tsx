interface Props {
  genres: GenreResultProps[];
}

interface GenreResultProps {
  id: number;
  name: string;
  slug: string;
}

function GenreDiv({ genres }: Props) {
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreDiv;
