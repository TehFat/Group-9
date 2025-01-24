import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

