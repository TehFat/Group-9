import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar component (already completed by you)
import Home from "./pages/Home"; // Your home page component (already completed by you)
import Footer from "./components/Footer"; // Footer component (already completed by you)

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
    });
  };

  
  return (
    <Router>
      <div className="app-container">
        {/* Navbar component (already completed by you) */}
        <Navbar />

        {/* Routes for the home page (already completed by you) */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home onAddToPlaylist={handleAddToPlaylist} />} />
          
          {/* 
            we can add more routes here for other pages our team will work on.
            For example, if we are adding a Playlist page, the route would look like:
            <Route path="/playlist" element={<Playlist playlist={playlist} />} />
          */}

          {/* 
            If we want to add another page in the future, 
            for example, a Movie Categories page, add the route like this:
            <Route path="/categories" element={<MovieCategories />} />
          */}
        </Routes>

        {/* Footer component (already completed) */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
