import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Playlist from "./pages/Playlist";


const App = () => {
  // eslint-disable-next-line no-unused-vars
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

          <Route path="/" element={<Home onAddToPlaylist={handleAddToPlaylist} />} />
          <Route path="/AboutUs" element={<AboutUs />} />

          {/* Home Route */}
         

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

        <Footer />
      </div>
    </Router>
  );
};

export default App;

