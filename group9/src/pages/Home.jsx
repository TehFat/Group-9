import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import AddToPlaylistButton from "../components/AddToPlaylistButton"; // Import Add to Playlist button
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

  //  Function to Scroll Left
  const scrollLeft = (id) => {
    const carousel = document.getElementById(id);
    if (carousel) {
      carousel.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  //  Function to Scroll Right
  const scrollRight = (id) => {
    const carousel = document.getElementById(id);
    if (carousel) {
      carousel.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <SearchBar onSearch={handleSearch} />

      {/* 🔍 Search Results Section */}
      {movies.length > 0 && (
        <>
          <h2 className="section-heading">Search Results</h2>
          <div className="carousel-container">
            <button className="scroll-button left" onClick={() => scrollLeft("search-results-carousel")}>
              ◀
            </button>
            <div id="search-results-carousel" className="carousel">
              {movies.map((movie) => (
                <div key={movie.imdbID} className="carousel-item">
                  <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                  <p className="movie-title">{movie.Title}</p>
                  <AddToPlaylistButton movie={movie} onAddToPlaylist={onAddToPlaylist} />
                </div>
              ))}
            </div>
            <button className="scroll-button right" onClick={() => scrollRight("search-results-carousel")}>
              ▶
            </button>
          </div>
        </>
      )}

      {/*  Top Rated Movies Section */}
      <h2 className="section-heading">Top Rated Movies</h2>
      <div className="carousel-container">
        <button className="scroll-button left" onClick={() => scrollLeft("top-rated-carousel")}>
          ◀
        </button>
        <div id="top-rated-carousel" className="carousel">
          {topRatedMovies.map((movie) => (
            <div key={movie.imdbID} className="carousel-item">
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <p className="movie-title">{movie.Title}</p>
              <AddToPlaylistButton movie={movie} onAddToPlaylist={onAddToPlaylist} />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight("top-rated-carousel")}>
          ▶
        </button>
      </div>
      <MovieTrailers />
    </div>
   
  );
};

export default Home;
