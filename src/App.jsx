import { useState } from "react";
import "./App.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//context
import { MovieContextProvider } from "./contexts/MovieContext";
//component
import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MovieContextProvider>
      <SearchBar></SearchBar>
    </MovieContextProvider>
  );
}

export default App;
