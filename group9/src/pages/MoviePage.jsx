import React, { useState, useEffect } from "react";
import { fetchMoviesByGenre, fetchMovieDetails } from "../api/movieApi"; 
import AddToPlaylistButton from "../components/AddToPlaylistButton"; // Import button
import "../styles/MovieCategories.css";

const MoviesPage = ({ onAddToPlaylist }) => {
  const [categories] = useState(["Action", "Comedy", "Drama", "Horror", "Sci-Fi"]);
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null); // Movie for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Fetch movies by category
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

  // Handle selecting movie for details
  const handleMovieSelect = async (imdbID) => {
    try {
      const details = await fetchMovieDetails(imdbID);
      setSelectedMovie(details);
      setIsModalOpen(true); // Open modal on movie select
    } catch (err) {
      console.error("Failed to load movie details", err);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null); // Reset selected movie
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
                />
                {/* <p className="movie-title">{movie.Title}</p> */}
                {/* Add movie info button */}
                <button
                  onClick={() => handleMovieSelect(movie.imdbID)}
                  className="movie-info-button"
                >
                  Movie Info
                </button>
                <AddToPlaylistButton
                  movie={movie}
                  onAddToPlaylist={onAddToPlaylist}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for Movie Details */}
      {isModalOpen && selectedMovie && (
        <div className="movie-modal">
          <div className="modal-content">
            <div className="modal-left">
              <img
                src={selectedMovie.Poster}
                alt={selectedMovie.Title}
                className="modal-poster"
              />
            </div>
            <div className="modal-right">
              <h3>{selectedMovie.Title}</h3>
              <p><strong>Writer:</strong> {selectedMovie.Writer}</p>
              <p><strong>Year:</strong> {selectedMovie.Year}</p>
              <p><strong>Description:</strong> {selectedMovie.Plot}</p>
              <button onClick={closeModal} className="close-modal-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
