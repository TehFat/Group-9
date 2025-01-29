import React, { useState, useEffect } from 'react';
import { fetchMoviesByGenre, fetchMovieDetails } from '../api/movieApi'; // Correct path
import '../styles/MovieCategories.css';

const MovieCategories = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMovies = async (genre) => {
    setLoading(true);
    setError(null);
    try {
      console.log(`Fetching ${genre} movies...`);
      const result = await fetchMoviesByGenre(genre); // Fetch movies based on genre
      console.log(`Fetched ${genre} movies:`, result);
      setMovies(result);
    } catch (err) {
      console.error(`Error fetching ${genre} movies:`, err);
      setError(`Failed to load ${genre} movies. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies('action'); // Default to Action genre
  }, []);

  const handleGenreChange = (genre) => {
    loadMovies(genre);
  };

  const handleMovieSelect = async (imdbID) => {
    setLoading(true);
    setError(null);
    try {
      console.log(`Fetching details for movie ${imdbID}...`);
      const details = await fetchMovieDetails(imdbID);
      console.log(`Fetched details for movie ${imdbID}:`, details);
      setSelectedMovie(details);
    } catch (err) {
      console.error(`Error fetching details for movie ${imdbID}:`, err);
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
      
      {/* Genre buttons */}
      <div className="genre-buttons">
        <button onClick={() => handleGenreChange('action')}>Action</button>
        <button onClick={() => handleGenreChange('comedy')}>Comedy</button>
        <button onClick={() => handleGenreChange('drama')}>Drama</button>
        <button onClick={() => handleGenreChange('horror')}>Horror</button>
      </div>

      <div className="movie-list">
        <h3>Movies</h3>
        {/* Display movies in a row with horizontal scroll */}
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            onClick={() => handleMovieSelect(movie.imdbID)}
            className="movie-item"
          >
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <div className="movie-name">{movie.Title}</div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-details">
          <h3>Selected Movie Details</h3>
          <p>{selectedMovie.Title}</p>
          <p>{selectedMovie.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCategories;
