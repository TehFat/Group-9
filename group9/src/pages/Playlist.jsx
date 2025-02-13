// import React from "react";
// import "../styles/Playlist.css";

// const Playlist = ({ playlist, setPlaylist }) => {
//   React.useEffect(() => {
//     const savedPlaylist = localStorage.getItem("playlist");
//     if (savedPlaylist) {
//       setPlaylist(JSON.parse(savedPlaylist));
//     }
//   }, [setPlaylist]);

//   React.useEffect(() => {
//     if (playlist.length > 0) {
//       localStorage.setItem("playlist", JSON.stringify(playlist));
//     }
//   }, [playlist]);

//   const handleDelete = (title) => {
//     const updatedPlaylist = playlist.filter((movie) => movie.Title !== title);
//     setPlaylist(updatedPlaylist);
//   };

//   const [likedMovies, setLikedMovies] = React.useState(() => {
//     const savedLikedMovies = localStorage.getItem("likedMovies");
//     return savedLikedMovies ? JSON.parse(savedLikedMovies) : {};
//   });

//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const [selectedRatings, setSelectedRatings] = React.useState({});
//   const [currentMovieTitle, setCurrentMovieTitle] = React.useState("");

//   const handleLike = (title) => {
//     setLikedMovies((prevLikedMovies) => {
//       const newLikedMovies = {
//         ...prevLikedMovies,
//         [title]: !prevLikedMovies[title], // Toggle the liked state for the movie
//       };
//       localStorage.setItem("likedMovies", JSON.stringify(newLikedMovies));
//       return newLikedMovies;
//     });
//   };

//   const handleRateClick = (title) => {
//     setIsModalOpen(true);
//     setCurrentMovieTitle(title);
//   };
//   const handleRatingSelect = (rating) => {
//     setSelectedRatings((prevRating) => ({
//       ...prevRating,
//       [currentMovieTitle]: rating,
//     }));
//     setIsModalOpen(false);
//   };
//   return (
//     <main className="playlist-page">
//       <header>
//       <h2 className="playlist-header">My Playlist</h2>
//       <h3 className="empty-playlist">
//         {" "}
//         {playlist.length === 0 ? "Playlist is empty" : ""}{" "}
//       </h3>
//       </header>
//       <section className="playlist-container">
//         {playlist.map((movie) => {
//           const isLiked = likedMovies[movie.Title] || false;
//           return (
//             <article className="playlist-movie-card" key={movie.Title}>
//               <img src={movie.Poster} alt={movie.Title || "Movie poster"} className="playlist-movie-poster" />
//               <button
//                 className="rating-button"
//                 onClick={() => handleRateClick(movie.Title)}
//               >
//                 {" "}
//                 {selectedRatings[movie.Title] || "Rate"}
//               </button>
//               <h3 className="playlist-movie-title">{movie.Title}</h3>
//               <div className="movie-info">
//                 <p className="playlist-movie-year">{movie.Year} </p>
//                 <button
//                   key={movie.Title}
//                   className={`heart-button ${isLiked ? "liked" : ""}`}
//                   onClick={() => handleLike(movie.Title)}
//                 >
//                   {" "}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill={isLiked ? "red" : "none"}
//                     stroke="currentColor"
//                   >
//                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                   </svg>
//                 </button>
//                 <button
//                   className="playlist-delete-button"
//                   onClick={() => handleDelete(movie.Title)}
//                 >
//                   <img
//                     className="delete-icon"
//                     alt="delete-icon"
//                     src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
//                   />
//                 </button>
//               </div>
//             </article>
//           );
//         })}
//       </section>
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="playlist-modal-content">
//             <button
//               className="playlist-close-button"
//               onClick={() => setIsModalOpen(false)}
//             >
//               &#10006;
//             </button>
//             <h3>Rate the movie!</h3>
//             <div className="rating-buttons">
//               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
//                 <button key={rating} onClick={() => handleRatingSelect(rating)}>
//                   {rating}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Playlist;

import React from "react";
import "../styles/Playlist.css";

const Playlist = ({ playlist, setPlaylist }) => {
  const [likedMovies, setLikedMovies] = React.useState(() => {
    const savedLikedMovies = localStorage.getItem("likedMovies");
    return savedLikedMovies ? JSON.parse(savedLikedMovies) : {};
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRatings, setSelectedRatings] = React.useState({});
  const [currentMovieTitle, setCurrentMovieTitle] = React.useState("");

  React.useEffect(() => {
    if (playlist.length > 0) {
      localStorage.setItem("playlist", JSON.stringify(playlist));
    }
  }, [playlist]);

  React.useEffect(() => {
    const savedPlaylist = localStorage.getItem("playlist");
    if (savedPlaylist) {
      setPlaylist(JSON.parse(savedPlaylist));
    }
  }, [setPlaylist]);

  const handleDelete = (title) => {
    const updatedPlaylist = playlist.filter((movie) => movie.Title !== title);
    setPlaylist(updatedPlaylist);
  };

  const handleLike = (title) => {
    setLikedMovies((prevLikedMovies) => {
      const newLikedMovies = {
        ...prevLikedMovies,
        [title]: !prevLikedMovies[title], // Toggle the liked state for the movie
      };
      localStorage.setItem("likedMovies", JSON.stringify(newLikedMovies));
      return newLikedMovies;
    });
  };

  const handleRateClick = (title) => {
    setIsModalOpen(true);
    setCurrentMovieTitle(title);
  };

  const handleRatingSelect = (rating) => {
    setSelectedRatings((prevRating) => ({
      ...prevRating,
      [currentMovieTitle]: rating,
    }));
    setIsModalOpen(false);
  };

  return (
    <main className="playlist-page">
      <header>
        <h2 className="playlist-header">My Playlist</h2>
        <h3 className="empty-playlist">
          {" "}
          {playlist.length === 0 ? "Playlist is empty" : ""}{" "}
        </h3>
      </header>
      <section className="playlist-container">
        {playlist.map((movie) => {
          const isLiked = likedMovies[movie.Title] || false;
          return (
            <article className="playlist-movie-card" key={movie.Title}>
              <img
                src={movie.Poster}
                alt={movie.Title || "Movie poster"}
                className="playlist-movie-poster"
              />
              <button
                className="rating-button"
                onClick={() => handleRateClick(movie.Title)}
              >
                {" "}
                {selectedRatings[movie.Title] || "Rate"}
              </button>
              <h3 className="playlist-movie-title">{movie.Title}</h3>
              <div className="movie-info">
                <p className="playlist-movie-year">{movie.Year} </p>
                <button
                  key={movie.Title}
                  className={`heart-button ${isLiked ? "liked" : ""}`}
                  onClick={() => handleLike(movie.Title)}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={isLiked ? "red" : "none"}
                    stroke="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <button
                  className="playlist-delete-button"
                  onClick={() => handleDelete(movie.Title)}
                >
                  <img
                    className="delete-icon"
                    alt="delete-icon"
                    src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
                  />
                </button>
              </div>
            </article>
          );
        })}
      </section>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="playlist-modal-content">
            <button
              className="playlist-close-button"
              onClick={() => setIsModalOpen(false)}
            >
              &#10006;
            </button>
            <h3>Rate the movie!</h3>
            <div className="rating-buttons">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <button key={rating} onClick={() => handleRatingSelect(rating)}>
                  {rating}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Playlist;

