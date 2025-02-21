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
      if (!prev.find((item) => item.imdbID === movie.imdbID)) {
        return [...prev, movie]; // Add movie if it's not already in the playlist
      }
      return prev;
    });
  };

  return (
    <Router>
      {/* this div and classname isnt used anywhere, can be removed */}

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home onAddToPlaylist={handleAddToPlaylist} />}
        />

        <Route
          path="/playlist"
          element={<Playlist playlist={playlist} setPlaylist={setPlaylist} />}
        />
        <Route
          path="/movies"
          element={<MoviesPage onAddToPlaylist={handleAddToPlaylist} />}
        />

        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
