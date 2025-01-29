import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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


        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

