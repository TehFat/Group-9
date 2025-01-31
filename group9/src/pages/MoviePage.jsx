import React, { useState, useEffect } from "react";
import { fetchMoviesByGenre, fetchMovieDetails } from "../api/movieApi";
import "../styles/MovieCategories.css";

const MoviesPage = ({ onAddToPlaylist }) => {
  const [categories] = useState(["Action", "Comedy", "Drama", "Horror", "Sci-Fi"]);
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const movieData = {};
      for (const category of categories) {
        const movies = await fetchMoviesByGenre(category);
        movieData[category] = movies || [];
      }
      setMoviesByCategory(movieData);
    };
    fetchAllCategories();
  }, [categories]);

  const handleMovieSelect = async (imdbID) => {
    const details = await fetchMovieDetails(imdbID);
    setSelectedMovie(details);
  };

  return (
    <div className="movies-page">
      <h1 className="page-title">Explore Movies</h1>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="movies-row">
            {moviesByCategory[category]?.map((movie) => (
              <div key={movie.imdbID} className="movie-card">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="movie-poster"
                  onClick={() => handleMovieSelect(movie.imdbID)}
                />
                <p className="movie-title">{movie.Title}</p>
                <button
                  className="add-to-playlist"
                  onClick={() => onAddToPlaylist(movie)}
                >
                  + Add to Playlist
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedMovie && (
        <div className="movie-details">
          <h3>{selectedMovie.Title}</h3>
          <p>{selectedMovie.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
