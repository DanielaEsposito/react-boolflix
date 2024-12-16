import { useState } from "react";
import "./App.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//context
import { MovieContextProvider } from "./contexts/MovieContext";
//component
import Header from "./components/Header";
import Main from "./components/Main";
//import MoviesList from "./components/moviesList";

function App() {
  return (
    <MovieContextProvider>
      <Header></Header>
      <Main></Main>
    </MovieContextProvider>
  );
}

export default App;
