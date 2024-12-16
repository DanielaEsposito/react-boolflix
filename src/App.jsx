import { useState } from "react";

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
      <div className="wrapper">
        <Header></Header>
        <Main></Main>
      </div>
    </MovieContextProvider>
  );
}

export default App;
