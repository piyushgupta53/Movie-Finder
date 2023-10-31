import React from "react";
import styles from "./App.module.css";

function SearchForm(
  { handleMovieClick, searchMovie, setSearchMovie, status },
  ref
) {
  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleMovieClick}>
        <input
          ref={ref}
          type="text"
          className={styles.searchInput}
          placeholder="Search a movie..."
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
        />
        <button className={styles.searchBtn}>
          {status === "loading" ? "Searching.." : "Search"}
        </button>
      </form>
    </div>
  );
}

export default React.forwardRef(SearchForm);
