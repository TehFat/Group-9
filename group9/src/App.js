import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

const App = () => {
  // State to store the user's playlist (favorite movies)
  const [playlist, setPlaylist] = useState([]);

  // Function to add a movie to the playlist
  const addToPlaylist = (movie) => {
    setPlaylist((prev) => {
      // Avoid duplicate movies in the playlist
      if (!prev.find((item) => item.imdbID === movie.imdbID)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar component */}
        <Navbar />

        {/* Define routes for navigation */}
        <Routes>
          <Route path="/" element={<Home addToPlaylist={addToPlaylist} />} />
          <Route path="/movies" element={<MoviePage />} />
          {/* Future routes can be added here, e.g., Playlist page */}
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
