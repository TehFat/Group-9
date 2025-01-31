import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Playlist from "./pages/Playlist";
import AboutUs from "./pages/AboutUs";
import MoviesPage from "./pages/MoviePage";

const App = () => {
  const [playlist, setPlaylist] = useState([]); // State for storing the playlist

  // Function to add movies to the playlist
  const handleAddToPlaylist = (movie) => {
    setPlaylist((prev) => {
      // Avoid duplicate movies in the playlist
      if (!prev.find((item) => item.imdbID === movie.imdbID)) {
        return [...prev, movie]; // Add movie if it's not already in the playlist
      }
      return prev; // Return existing playlist if movie is already in it
    });
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar Component */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home onAddToPlaylist={handleAddToPlaylist} />} />

          {/* Playlist Route */}
          <Route path="/playlist" element={<Playlist playlist={playlist} />} />

          {/* Movies Page Route */}
          <Route path="/movies" element={<MoviesPage onAddToPlaylist={handleAddToPlaylist} />} />

          {/* About Us Route */}
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
