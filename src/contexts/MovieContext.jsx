import { createContext, useState, useContext } from "react";
// creo il contex
const MovieContext = createContext();

//esporto il provider
export const MovieContextProvider = ({ children }) => {
  //IMPORT URL
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2ZlYjM5OTI3OTFlYzU5MzllMTkwMTRlYzhmOTEyNCIsIm5iZiI6MTczNDM0Mjg0My44NjQsInN1YiI6IjY3NWZmOGJiYWFkZTMyNTliOTI5NjEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CctF0XC3j_ywHQoGAFLZ_gVb3G7XgkXoH_CCboJ6d8Q";
  const apiMoviesUrl = "https://api.themoviedb.org/3/search/movie";
  const apiSeriesUrl = "https://api.themoviedb.org/3/search/tv";

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  //chiamata fetch per i film

  //! prova a mappare i dati e a ricevere solo il poster
  const fetchMovies = (query) => {
    fetch(`${apiMoviesUrl}?query=${query}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);

        console.log(data.results);
      });
  };
  //chiamata fetch per le serie
  const fetchSeries = (query) => {
    fetch(`${apiSeriesUrl}?query=${query}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);

        console.log(data.results);
      });
  };

  return (
    <MovieContext.Provider value={{ movies, series, fetchSeries, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
}; //esporto lo use per i consumers
export const useMovies = () => useContext(MovieContext);
