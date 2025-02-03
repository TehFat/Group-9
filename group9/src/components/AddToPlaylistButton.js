// src/components/AddToPlaylistButton.js
import React from "react";
import "../styles/AddToPlaylistButton.css"; // Import styles

const AddToPlaylistButton = ({ movie, onAddToPlaylist }) => {
  return (
    <button
      className="add-to-playlist-btn"
      onClick={() => onAddToPlaylist(movie)}
    >
      Add to Playlist
    </button>
  );
};

export default AddToPlaylistButton;
