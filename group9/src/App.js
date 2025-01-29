import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Playlist from "./pages/Playlist";

const App = () => {
  const [playlist, setPlaylist] = useState([]);

  const handleAddToPlaylist = (movie) => {
    setPlaylist((prev) => {
      if (!prev.find((item) => item.imdbID === movie.imdbID)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home onAddToPlaylist={handleAddToPlaylist} />}
          />
          <Route path="/movies" element={<MoviePage />} />
          <Route
            path="/playlist"
            element={
              <Playlist playlist={playlist} setPlaylist={setPlaylist} />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
