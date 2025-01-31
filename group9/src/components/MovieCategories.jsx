import React, { useState, useEffect } from 'react';
import { fetchMoviesByGenre, fetchMovieDetails } from '../api/movieApi'; 
import '../styles/MovieCategories.css';

const MovieCategories = ({ onAddToPlaylist }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovies('action'); // Default to Action genre
  }, []);

  const loadMovies = async (genre) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchMoviesByGenre(genre);
      setMovies(result);
    } catch (err) {
      setError(`Failed to load ${genre} movies. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieSelect = async (imdbID) => {
    setLoading(true);
    setError(null);
    try {
      const details = await fetchMovieDetails(imdbID);
      setSelectedMovie(details);
    } catch (err) {
      setError("Failed to load movie details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-categories-container">
      <h2>Movie Categories</h2>

      <div className="genre-buttons">
        {["action", "comedy", "drama", "horror"].map((genre) => (
          <button key={genre} onClick={() => loadMovies(genre)}>{genre}</button>
        ))}
      </div>

      <div className="movie-list">
        <h3>Movies</h3>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-poster"
              onClick={() => handleMovieSelect(movie.imdbID)}
            />
            <div className="movie-name">{movie.Title}</div>
            <button
              className="add-to-playlist"
              onClick={() => onAddToPlaylist(movie)}
            >
              + Add to Playlist
            </button>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-details">
          <h3>{selectedMovie.Title}</h3>
          <p>{selectedMovie.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCategories;
