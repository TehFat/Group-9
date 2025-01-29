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
      "The Lord of the Rings: The Return of the King",
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
    return [];
  }
};
