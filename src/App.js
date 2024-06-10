import { useState } from "react";

import Nav from './NavBar/Nav';
import { tempMovieData, tempWatchedData } from "./Data/data";
import Main from "./Main/Main";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);


  return (
    <>
      <Nav query={query} onSetquery={setQuery} movies={movies}></Nav>

      <Main movies={movies} tempWatchedData={tempWatchedData}></Main>
    </>
  );
}
