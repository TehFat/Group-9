import React, { useState } from "react"; 
import { Link } from "react-router-dom"; // Import the Link component for navigation
import "../styles/Navbar.css"; // Import the CSS file for Navbar styling

// Navbar component definition
const Navbar = () => {
  // State to track if the user is subscribed
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Function to toggle subscription status
  const toggleSubscription = () => {
    setIsSubscribed((prev) => !prev); // Toggle the subscription state
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">🎬 MovieApp</div>
      
      {/* Navigation Links */}
      <div className="nav-links">
        {/* React Router's Link components are used for navigation */}
        {/* Home link */}
        <Link to="/">Home</Link>
        {/* Playlist link */}
        <Link to="/playlist">My Playlist</Link>
        {/* Movies link */}
        <Link to="/movies">Movies</Link>
      </div>

      {/* Subscribe Button */}
      <button
        className={`subscribe-btn ${isSubscribed ? "subscribed" : ""}`} // Apply "subscribed" class if user is subscribed
        onClick={toggleSubscription} // Toggle the subscription on button click
      >
        {isSubscribed ? "Subscribed" : "Subscribe"} {/* Toggle button text */}
      </button>
    </nav>
  );
};

export default Navbar;
