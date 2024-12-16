import Card from "./Card";
import { useMovies } from "../contexts/MovieContext";

export default function Main() {
  const { movies, series } = useMovies();

  return (
    <main className="page-main">
      <section id="movies-list">
        <h1>Movies</h1>

        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              originalTitle={movie.original_title}
              vote={movie.vote_average}
              language={flags}
            />
          );
        })}
      </section>
      <section id="series">
        <h1>Series</h1>
        {series.map((serie) => {
          return (
            <Card
              key={serie.id}
              title={serie.name}
              originalTitle={serie.original_name}
              vote={serie.vote_average}
              language={flags}
              //img={poster_path}
            />
          );
        })}
      </section>
    </main>
  );
}
