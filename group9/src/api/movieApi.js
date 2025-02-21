import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// can be refactored and simplified to these functions
const fetchFromApi = async (params) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { apikey: API_KEY, ...params },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return null;
  }
};

export const fetchMovies = async (query) => {
  const data = await fetchFromApi({ s: query });
  return data?.Search || [];
};

export const fetchTopRatedMovies = async () => {
  const topRatedTitles = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Inception",
    "Interstellar",
    "The Prestige",
  ];

  const promises = topRatedTitles.map((title) => fetchFromApi({ t: title }));
  const responses = await Promise.all(promises);
  return responses.filter((response) => response !== null);
};

export const fetchMoviesByGenre = async (genre) => {
  const data = await fetchFromApi({ s: genre });
  return data?.Search || [];
};

export const fetchMovieDetails = async (imdbID) => {
  return await fetchFromApi({ i: imdbID });
};
