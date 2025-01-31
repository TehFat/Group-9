
import React from "react";
import "../styles/Playlist.css";

const Playlist = ({ playlist, setPlaylist }) => {
  const handleDelete = (title) => {
    const updatedPlaylist = playlist.filter((movie) => movie.Title !== title);
    setPlaylist(updatedPlaylist);
  };
  return (
    <div className="playlist-page">
      <h2 className="playlist-header">My Playlist</h2>
      <h3 className="empty-playlist">
        {" "}
        {playlist.length === 0 ? "Playlist is empty" : ""}{" "}
      </h3>
      <div className="playlist-container">
        {playlist.map((movie) => {
          console.log(movie);
          return (
            <div className="playlist-movie-card" key={movie.Title}>
              <img src={movie.Poster} className="playlist-movie-poster" />
              <button className="rating-button">Rate</button>
              <h3 className="playlist-movie-title">{movie.Title}</h3>
              <div className="movie-info">
                <p className="playlist-movie-year">{movie.Year} </p>
                <button
                  className="playlist-delete-button"
                  onClick={() => handleDelete(movie.Title)}
                >
                  <img
                    className="delete-icon"
                    src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;


