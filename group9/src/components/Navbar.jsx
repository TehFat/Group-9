import React, { useState } from "react"; 
import { Link } from "react-router-dom"; // Import the Link component for navigation
import "../styles/Navbar.css";

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
        <Link to="/">Home</Link>
        <Link to="/playlist">My Playlist</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/aboutUs">About Us</Link>


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
