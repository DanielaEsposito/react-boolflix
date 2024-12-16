import { useState } from "react";
import "./App.css";
//context
import { MovieContextProvider } from "./contexts/MovieContext";
//component
import SearchBar from "./components/SearchBar";
function App() {
  const [count, setCount] = useState(0);

  return <MovieContextProvider></MovieContextProvider>;
}

export default App;
