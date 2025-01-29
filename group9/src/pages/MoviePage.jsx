import React, { useState, useEffect } from "react";
import { fetchMoviesByGenre } from "../api/movieApi";
import "../styles/MovieCategories.css"; 

const MoviesPage = () => {
  const [categories] = useState(["Action", "Comedy", "Drama", "Horror", "Sci-Fi"]);
  const [moviesByCategory, setMoviesByCategory] = useState({});

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

  return (
    <div className="movies-page">
      <h1 className="page-title">Explore Movies</h1>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="movies-row">
            {moviesByCategory[category]?.map((movie) => (
              <div key={movie.imdbID} className="movie-card">
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                <p className="movie-title">{movie.Title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
