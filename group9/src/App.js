import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
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
=======
import Navbar from "./components/Navbar"; // Navbar component (already completed by you)
import Home from "./pages/Home"; // Your home page component (already completed by you)
import Footer from "./components/Footer"; // Footer component (already completed by you)
import Playlist from "./pages/Playlist";

// This is the main App component where routing is handled
const App = () => {
  const [playlist, setPlaylist] = useState([]); // State for storing the playlist, for other group members to use if needed

  // Function to add movies to the playlist, for other group members to use in their components
  const handleAddToPlaylist = (movie) => {
    setPlaylist((prev) => {
      // Check if the movie is already in the playlist to prevent duplicates
      if (!prev.find((item) => item.imdbID === movie.imdbID)) {
        return [...prev, movie]; // Add movie to playlist if not found
      }
      return prev; // Return existing playlist if movie is already in it
>>>>>>> main
    });
  };

  return (
    <Router>
      <div className="app-container">
<<<<<<< HEAD
        {/* Navbar component */}
        <Navbar />

        {/* Define routes for navigation */}
        <Routes>
          <Route path="/" element={<Home addToPlaylist={addToPlaylist} />} />
          <Route path="/movies" element={<MoviePage />} />
          {/* Future routes can be added here, e.g., Playlist page */}
        </Routes>

        {/* Footer component */}
=======
        {/* Navbar component (already completed by you) */}
        <Navbar />

        {/* Routes for the home page (already completed by you) */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={<Home onAddToPlaylist={handleAddToPlaylist} />}
          />

          {
            /* 
            we can add more routes here for other pages our team will work on.
            For example, if we are adding a Playlist page, the route would look like:
            <Route path="/playlist" element={<Playlist playlist={playlist} />} /> */
            <Route
              path="/playlist"
              element={
                <Playlist playlist={playlist} setPlaylist={setPlaylist} />
              }
            />
          }

          {/* 
            If we want to add another page in the future, 
            for example, a Movie Categories page, add the route like this:
            <Route path="/categories" element={<MovieCategories />} />
          */}
        </Routes>

        {/* Footer component (already completed) */}
>>>>>>> main
        <Footer />
      </div>
    </Router>
  );
};

export default App;
