import { createContext, useState, useContext } from "react";
// creo il contex
const MovieContext = createContext();

//esporto il provider
export const MovieContextProvider = ({ children }) => {
  //IMPORT URL
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiMoviesUrl = import.meta.env.VITE_API_MOVIES_URL;
  const apiSeriesUrl = import.meta.env.VITE_API_SERIES_URL;

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
