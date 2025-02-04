import React, { useState, useEffect } from "react";
import { fetchMoviesByGenre, fetchMovieDetails } from "../api/movieApi"; // Ensure correct paths
import AddToPlaylistButton from "../components/AddToPlaylistButton"; // Import button
import { FaInfoCircle } from 'react-icons/fa'; // Import the Info icon
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
    <main className="movies-page">
      <h1 className="page-title">Explore Movies</h1>

      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="movies-row">
            {moviesByCategory[category]?.map((movie) => (
              <article key={movie.imdbID} className="movie-card">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="movie-poster"
                />
                <div className="movie-actions">
                  {/* Replace the "Movie Info" button with the FaInfoCircle icon */}
                  <button
                    onClick={() => handleMovieSelect(movie.imdbID)}
                    className="movie-info-icon"
                  >
                    <FaInfoCircle className="info-icon" />
                  </button>
                  <AddToPlaylistButton
                    movie={movie}
                    onAddToPlaylist={onAddToPlaylist}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
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
    </main>
  );
};

export default MoviesPage;
