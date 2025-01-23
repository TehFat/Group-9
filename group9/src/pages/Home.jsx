import React, { useState, useEffect } from "react"; // Import React and hooks for state and side effects
import SearchBar from "../components/SearchBar"; // Import the SearchBar component
import { fetchMovies, fetchTopRatedMovies } from "../api/movieApi"; // Import the movie API functions
import "../styles/Home.css"; // Import the CSS for Home page styling

const Home = ({ onAddToPlaylist }) => {
  const [movies, setMovies] = useState([]); // State to store search results
  const [topRatedMovies, setTopRatedMovies] = useState([]); // State to store top-rated movies

  // Fetch top-rated movies on initial component mount
  useEffect(() => {
    const getTopRatedMovies = async () => {
      const fetchedTopRated = await fetchTopRatedMovies(); // Fetch the top-rated movies
      setTopRatedMovies(fetchedTopRated || []); // Update the topRatedMovies state
    };

    getTopRatedMovies(); // Call the function to fetch top-rated movies
  }, []); // Empty dependency array means this will run only once when the component mounts

  // Handle search input from the user
  const handleSearch = async (query) => {
    const fetchedMovies = await fetchMovies(query); // Fetch movies based on the search query
    setMovies(fetchedMovies || []); // Update the state with the fetched movies
  };

  // Scroll left for carousel (for top-rated or search result carousels)
  const scrollLeft = (id) => {
    const carousel = document.getElementById(id); // Get the carousel element by its ID
    if (carousel) {
      carousel.scrollBy({ left: -300, behavior: "smooth" }); // Scroll the carousel to the left
    }
  };

  // Scroll right for carousel
  const scrollRight = (id) => {
    const carousel = document.getElementById(id); // Get the carousel element by its ID
    if (carousel) {
      carousel.scrollBy({ left: 300, behavior: "smooth" }); // Scroll the carousel to the right
    }
  };

  return (
    <div className="home-container">
      {/* Search Bar for searching movies */}
      <SearchBar onSearch={handleSearch} />

      {/* Display search results if there are any */}
      {movies.length > 0 && (
        <>
          <h2 className="section-heading">Search Results</h2>
          <div className="carousel-container">
            <button
              className="scroll-button left"
              onClick={() => scrollLeft("search-results-carousel")}
            >
              ◀
            </button>
            <div id="search-results-carousel" className="carousel">
              {movies.map((movie) => (
                <div key={movie.imdbID} className="carousel-item">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="movie-poster"
                  />
                  <p className="movie-title">{movie.Title}</p>
                  {/* Button to add movie to the playlist */}
                  <button
                    className="add-to-playlist-btn"
                    onClick={() => onAddToPlaylist(movie)}
                  >
                    Add to Playlist
                  </button>
                </div>
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={() => scrollRight("search-results-carousel")}
            >
              ▶
            </button>
          </div>
        </>
      )}

      {/* Display Top Rated Movies if there are any */}
      <h2 className="section-heading">Top Rated Movies</h2>
      <div className="carousel-container">
        <button
          className="scroll-button left"
          onClick={() => scrollLeft("top-rated-carousel")}
        >
          ◀
        </button>
        <div id="top-rated-carousel" className="carousel">
          {topRatedMovies.map((movie) => (
            <div key={movie.imdbID} className="carousel-item">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="movie-poster"
              />
              <p className="movie-title">{movie.Title}</p>
            </div>
          ))}
        </div>
        <button
          className="scroll-button right"
          onClick={() => scrollRight("top-rated-carousel")}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Home;
