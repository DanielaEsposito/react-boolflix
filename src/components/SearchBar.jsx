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
    <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <h1 className="title fw-bold text-danger">BOOLFIX</h1>
        <div className="d-flex" role="search">
          <select name="" id="" className="me-3">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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
