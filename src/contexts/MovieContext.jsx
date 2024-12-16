import { createContext, useState, useContext } from "react";
// creo il contex
const MovieContext = createContext();
//esporto il provider
export const MovieContextProvider = ({ children }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  const [movies, setMovies] = useState([]);
  const fetchMovies = () => {
    fetch()
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
}; //esporto lo use per i consumers
export const useMovies = () => useContext(MovieContext);
