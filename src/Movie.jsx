import React from "react";
import styles from "./App.module.css";
import SearchForm from "./SearchForm";
import MovieDetails from "./MovieDetails";

function Movie() {
  const [searchMovie, setSearchMovie] = React.useState("");
  const [movieData, setMovieData] = React.useState({});
  const [status, setStatus] = React.useState("idle");

  const inputRef = React.useRef();

  const URL = "https://www.omdbapi.com/?apikey=6b203823&t=";

  const handleMovieClick = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const response = await fetch(URL + searchMovie);
    const data = await response.json();
    setMovieData(data);
    setStatus("completed");
    setSearchMovie("");
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <SearchForm
        handleMovieClick={handleMovieClick}
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        status={status}
        ref={inputRef}
      />
      <MovieDetails movieData={movieData} />
    </>
  );
}

export default Movie;
