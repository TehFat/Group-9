import React, { useState, useEffect } from "react";
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
  const [currentTrailerIndex, setCurrentTrailerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrailerIndex((prevIndex) => (prevIndex + 1) % trailers.length);
    }, 20000); // Change trailer every 20 seconds

    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="trailer-container">
      <h2 className="section-heading">Movie Trailers</h2>
      <div className="carousel-container">
        {/* Scroll Left Button */}
        <button className="scroll-button left" onClick={scrollLeft}>
          ◀
        </button>

        {/* Trailer Carousel */}
        <div id="trailer-carousel" className="carousel">
          {trailers.map((trailer, index) => (
            <div key={index} className="carousel-item">
              <ReactPlayer
                url={trailer.url}
                playing={currentTrailerIndex === index}
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
    </div>
  );
};

export default MovieTrailers;
