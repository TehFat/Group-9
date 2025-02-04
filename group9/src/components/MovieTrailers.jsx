import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/Home.css";

const trailers = [
  { title: "The Shawshank Redemption", url: "https://www.youtube.com/watch?v=6hB3S9bIaco" },
  { title: "The Godfather", url: "https://www.youtube.com/watch?v=sY1S34973zA" },
  { title: "The Dark Knight", url: "https://www.youtube.com/watch?v=EXeTwQWrcwY" },
  { title: "Pulp Fiction", url: "https://www.youtube.com/watch?v=s7EdQ4FqbhY" },
  { title: "Inception", url: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Interstellar", url: "https://www.youtube.com/watch?v=zSWdZVtXT7E" },
  { title: "The Prestige", url: "https://www.youtube.com/watch?v=o4gHCmTQDVI" },
];

const MovieTrailers = () => {
  const [playingIndex, setPlayingIndex] = useState(null); // Track which trailer is playing

  // Function for scrolling left
  const scrollLeft = () => {
    const carousel = document.getElementById("trailer-carousel");
    if (carousel) {
      carousel.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  // Function for scrolling right
  const scrollRight = () => {
    const carousel = document.getElementById("trailer-carousel");
    if (carousel) {
      carousel.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Function to handle trailer click (play the selected trailer)
  const handleTrailerClick = (index) => {
    setPlayingIndex(index); // Set the clicked trailer to play
  };

  return (
    <article className="trailer-container">
      <h2 className="section-heading">Movie Trailers</h2>
      <div className="carousel-container">
        {/* Scroll Left Button */}
        <button className="scroll-button left" onClick={scrollLeft}>
          ◀
        </button>

        {/* Trailer Carousel */}
        <div id="trailer-carousel" className="carousel">
          {trailers.map((trailer, index) => (
            <div
              key={index}
              className="carousel-item"
              onClick={() => handleTrailerClick(index)} // Trigger play on trailer click
              style={{ cursor: "pointer" }} // Indicate to user that this is clickable
            >
              <ReactPlayer
                url={trailer.url}
                playing={playingIndex === index} // Only play the clicked trailer
                controls
                width="100%"
                height="400px"
              />
              <p className="trailer-title">{trailer.title}</p>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button className="scroll-button right" onClick={scrollRight}>
          ▶
        </button>
      </div>
    </article>
  );
};

export default MovieTrailers;
