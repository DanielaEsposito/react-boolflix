import Card from "./Card";
import { useMovies } from "../contexts/MovieContext";

export default function Main() {
  const { movies, series } = useMovies();
  const imgUrl = import.meta.env.VITE_API_IMG_URL;
  return (
    <main className="page-main">
      <section id="movies-list">
        <div className="container">
          <h1>Movies</h1>
          <div className="row row-cols-4 g-4">
            {movies.map((movie) => {
              const image = movie.poster_path
                ? `${imgUrl}w342${movie.poster_path}`
                : "defaultImg.jpeg";
              return (
                <Card
                  key={movie.id}
                  title={movie.title}
                  originalTitle={movie.original_title}
                  vote={movie.vote_average}
                  language={movie.original_language}
                  img={image}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section id="series-list">
        <div className="container">
          <h1>Series</h1>

          <div className="row row-cols-4 g-4">
            {series.map((serie) => {
              const image = serie.poster_path
                ? `${imgUrl}w342${serie.poster_path}`
                : "defaultImg.jpeg";
              return (
                <Card
                  key={serie.id}
                  title={serie.name}
                  originalTitle={serie.original_name}
                  vote={serie.vote_average}
                  language={serie.original_language}
                  img={image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
