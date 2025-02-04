import React, { useState, useEffect } from 'react';
import { fetchMoviesByGenre, fetchMovieDetails } from '../api/movieApi'; 
import { FaInfoCircle } from 'react-icons/fa'; // Import the Info icon
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
      const result = await fetchMoviesByGenre(genre);
      setMovies(result);
    } catch (err) {
      setError(`Failed to load ${genre} movies. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies('action'); 
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
      setIsModalOpen(true); 
    } catch (err) {
      setError("Failed to load movie details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedMovie(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="movie-categories-container">
      <h2>Movie Categories</h2>
      <nav className="genre-buttons">
        {['action', 'comedy', 'drama', 'horror'].map(genre => (
          <button key={genre} onClick={() => handleGenreChange(genre)}>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </button>
        ))}
      </nav>

      <section className="movie-list">
        <h3>Movies</h3>
        {movies.map((movie) => (
          <article key={movie.imdbID} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <h4 className="movie-name">{movie.Title}</h4>
            <button onClick={() => handleMovieSelect(movie.imdbID)} className="movie-info-icon">
              <FaInfoCircle className="info-icon" />
            </button>
          </article>
        ))}
      </section>

      {/* Modal for movie details */}
      {isModalOpen && selectedMovie && (
        <div className="movie-modal">
          <div className="modal-content">
            <figure className="modal-left">
              <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="modal-poster" />
            </figure>
            <section className="modal-right">
              <h3>{selectedMovie.Title}</h3>
              <p><strong>Writer:</strong> {selectedMovie.Writer}</p>
              <p><strong>Year:</strong> {selectedMovie.Year}</p>
              <p><strong>Description:</strong> {selectedMovie.Plot}</p>
              <button onClick={closeModal}>Close</button>
            </section>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieCategories;
