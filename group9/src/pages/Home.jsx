import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import AddToPlaylistButton from "../components/AddToPlaylistButton"; 
import { fetchMovies, fetchTopRatedMovies } from "../api/movieApi";
import MovieTrailers from "../components/MovieTrailers";
import "../styles/Home.css";

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

  const scrollLeft = (id) => {
    document.getElementById(id)?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = (id) => {
    document.getElementById(id)?.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <main className="home-container">
      <SearchBar onSearch={handleSearch} />

      {movies.length > 0 && (
        <section className="search-results">
          <h2 className="section-heading">Search Results</h2>
          <div className="carousel-container">
            <button 
              className="scroll-button left" 
              onClick={() => scrollLeft("search-results-carousel")} 
              aria-label="Scroll left"
            >
              ◀
            </button>
            <div id="search-results-carousel" className="carousel">
              {movies.map((movie) => (
                <article key={movie.imdbID} className="carousel-item">
                  <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                  <p className="movie-title">{movie.Title}</p>
                  <AddToPlaylistButton movie={movie} onAddToPlaylist={onAddToPlaylist} />
                </article>
              ))}
            </div>
            <button 
              className="scroll-button right" 
              onClick={() => scrollRight("search-results-carousel")} 
              aria-label="Scroll right"
            >
              ▶
            </button>
          </div>
        </section>
      )}

      <section className="top-rated-movies">
        <h2 className="section-heading">Top Rated Movies</h2>
        <div className="carousel-container">
          <button 
            className="scroll-button left" 
            onClick={() => scrollLeft("top-rated-carousel")} 
            aria-label="Scroll left"
          >
            ◀
          </button>
          <div id="top-rated-carousel" className="carousel">
            {topRatedMovies.map((movie) => (
              <article key={movie.imdbID} className="carousel-item">
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                <p className="movie-title">{movie.Title}</p>
                <AddToPlaylistButton movie={movie} onAddToPlaylist={onAddToPlaylist} />
              </article>
            ))}
          </div>
          <button 
            className="scroll-button right" 
            onClick={() => scrollRight("top-rated-carousel")} 
            aria-label="Scroll right"
          >
            ▶
          </button>
        </div>
      </section>

      <MovieTrailers />
    </main>
  );
};

export default Home;
