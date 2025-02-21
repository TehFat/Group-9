import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import AddToPlaylistButton from "../components/AddToPlaylistButton";
import { fetchMovies, fetchTopRatedMovies } from "../api/movieApi";
import MovieTrailers from "../components/MovieTrailers";
import "../styles/Home.css";

// break out component for readability
const Carousel = ({ id, movies, onAddToPlaylist }) => (
  <div className="carousel-container">
    <button
      className="scroll-button left"
      onClick={() =>
        document
          .getElementById(id)
          ?.scrollBy({ left: -400, behavior: "smooth" })
      }
      aria-label="Scroll left"
    >
      ◀
    </button>
    <div id={id} className="carousel">
      {movies.map((movie) => (
        <article key={movie.imdbID} className="carousel-item">
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
          <p className="movie-title">{movie.Title}</p>
          <AddToPlaylistButton
            movie={movie}
            onAddToPlaylist={onAddToPlaylist}
          />
        </article>
      ))}
    </div>
    <button
      className="scroll-button right"
      onClick={() =>
        document.getElementById(id)?.scrollBy({ left: 600, behavior: "smooth" })
      }
      aria-label="Scroll right"
    >
      ▶
    </button>
  </div>
);

// breakout to simplify and improve readability
const Home = ({ onAddToPlaylist }) => {
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const fetchedTopRated = await fetchTopRatedMovies();
      setTopRatedMovies(fetchedTopRated || []);
    };
    getTopRatedMovies();
  }, []);

  const handleSearch = async (query) => {
    const fetchedMovies = await fetchMovies(query);
    setMovies(fetchedMovies || []);
  };

  return (
    <main className="home-container">
      <SearchBar onSearch={handleSearch} />

      {movies.length > 0 && (
        <section className="search-results">
          <h2 className="section-heading">Search Results</h2>
          <Carousel
            id="search-results-carousel"
            movies={movies}
            onAddToPlaylist={onAddToPlaylist}
          />
        </section>
      )}

      <section className="top-rated-movies">
        <h2 className="section-heading">Top Rated Movies</h2>
        <Carousel
          id="top-rated-carousel"
          movies={topRatedMovies}
          onAddToPlaylist={onAddToPlaylist}
        />
      </section>

      <MovieTrailers />
    </main>
  );
};

export default Home;
