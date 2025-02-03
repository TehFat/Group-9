import React, { useState, useEffect } from 'react';
import { fetchMoviesByGenre, fetchMovieDetails } from '../api/movieApi'; // Ensure correct paths
import '../styles/MovieCategories.css';

const MovieCategories = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const loadMovies = async (genre) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchMoviesByGenre(genre); // Fetch movies based on genre
      setMovies(result);
    } catch (err) {
      setError(`Failed to load ${genre} movies. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies('action'); // Default genre to Action
  }, []);

  const handleGenreChange = (genre) => {
    loadMovies(genre);
  };

  const handleMovieSelect = async (imdbID) => {
    setLoading(true);
    setError(null);
    try {
      const details = await fetchMovieDetails(imdbID);
      setSelectedMovie(details);
      setIsModalOpen(true); // Open modal when a movie is selected
    } catch (err) {
      setError("Failed to load movie details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedMovie(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-categories-container">
      <h2>Movie Categories</h2>
      <div className="genre-buttons">
        {['action', 'comedy', 'drama', 'horror'].map(genre => (
          <button key={genre} onClick={() => handleGenreChange(genre)}>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </button>
        ))}
      </div>

      <div className="movie-list">
        <h3>Movies</h3>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="movie-item"
          >
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <div className="movie-name">{movie.Title}</div>
            <button onClick={() => handleMovieSelect(movie.imdbID)} className="movie-info-button">
              Movie Info
            </button>
          </div>
        ))}
      </div>

      {/* Modal for movie details */}
      {isModalOpen && selectedMovie && (
        <div className="movie-modal">
          <div className="modal-content">
            <div className="modal-left">
              <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="modal-poster" />
            </div>
            <div className="modal-right">
              <h3>{selectedMovie.Title}</h3>
              <p><strong>Writer:</strong> {selectedMovie.Writer}</p>
              <p><strong>Year:</strong> {selectedMovie.Year}</p>
              <p><strong>Description:</strong> {selectedMovie.Plot}</p>
              <button  onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCategories;
