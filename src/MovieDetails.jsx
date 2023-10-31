import React from "react";
import styles from "./App.module.css";

function MovieDetails({ movieData }) {
  return (
    <>
      {movieData.Title && (
        <div className={styles.container}>
          <img
            src={movieData.Poster}
            alt={movieData.Title}
            className={styles.movieImage}
          />
          <div className={styles.movieInfo}>
            <h1>{movieData.Title}</h1>
            <p>{movieData.Plot}</p>
            <p className={styles.movieDetails}>
              IMDb {movieData.imdbRating} | {movieData.Runtime} |{" "}
              {movieData.Year}
            </p>
            <p className={styles.movieGenre}>{movieData.Genre}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
