import { useState } from "react";
import { useMovies } from "../contexts/MovieContext";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { fetchMovies, fetchSeries } = useMovies();
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };
  const handleSearch = () => {
    fetchMovies(query);
    fetchSeries(query);
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Boolfix</a>
        <div className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="text"
            placeholder="cerca un film"
            value={query}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleSearch}
          >
            Cerca
          </button>
        </div>
      </div>
    </nav>
  );
}
