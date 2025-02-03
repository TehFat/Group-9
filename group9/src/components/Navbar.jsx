import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaHome, FaList, FaFilm } from "react-icons/fa"; // Import icons
import "../styles/Navbar.css";

const Navbar = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Function to toggle subscription status
  const toggleSubscription = () => {
    setIsSubscribed((prev) => !prev);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo"><span className="highlight-m">M</span>ovieMagic</h1>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/" className="nav-item">
          <FaHome className="nav-icon" />
          <span className="nav-text">Home</span>
        </Link>
        <Link to="/playlist" className="nav-item">
          <FaList className="nav-icon" />
          <span className="nav-text">Playlist</span>
        </Link>
        <Link to="/movies" className="nav-item">
          <FaFilm className="nav-icon" />
          <span className="nav-text">Movies</span>
        </Link>
      </div>

      {/* Subscribe Button */}
      <button 
        className={`subscribe-btn ${isSubscribed ? "subscribed" : ""}`} 
        onClick={toggleSubscription}
      >
        {isSubscribed ? "Subscribed" : "Subscribe"}
      </button>
    </nav>
  );
};

export default Navbar;
