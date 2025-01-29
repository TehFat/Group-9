import axios from "axios";

const API_KEY = "81ab4ce6";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
      },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    // Replace these titles with highly-rated movie titles
    const topRatedTitles = [
      "The Shawshank Redemption",
      "The Godfather",
      "The Dark Knight",
      "Pulp Fiction",
      "Inception",
      "Interstellar",
      "The Prestige"

    ];

    const promises = topRatedTitles.map((title) =>
      axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          t: title,
        },
      })
    );

    const responses = await Promise.all(promises);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);

    return [];
  }
};

export const fetchMoviesByGenre = async (genre) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: genre, // Query by genre
      },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error(`Error fetching ${genre} movies:`, error);
    return [];
  }
};

export const fetchMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID, // Fetch by IMDb ID
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for ${imdbID}:`, error);
    return null;
  }
};

  
