
import React from "react";
import "../styles/Footer.css"; // Import the CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section: About Us */}
      <div className="footer-left">
      {/* <h4><a href="/about-us" className="footer-about-link">About Us</a></h4> */}
        <p className="footer-text">
            Streamit is your ultimate destination for 
             streaming movies and TV shows.</p>
      </div>

      {/* Center Section: Follow Us */}
      <div className="footer-center">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
              <path d="M12 0C5.371 0 0 5.373 0 12a12 12 0 0 0 8.205 11.44c.6.113.82-.262.82-.582 0-.288-.01-1.05-.016-2.062-3.338.728-4.042-1.613-4.042-1.613-.546-1.386-1.332-1.756-1.332-1.756-1.089-.746.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.836 2.809 1.306 3.493.998.107-.775.418-1.306.761-1.606-2.664-.304-5.465-1.334-5.465-5.935 0-1.31.468-2.382 1.236-3.222-.124-.304-.535-1.523.118-3.176 0 0 1.008-.322 3.305 1.23a11.56 11.56 0 0 1 3.008-.405c1.02.005 2.045.138 3.008.405 2.295-1.553 3.302-1.23 3.302-1.23.655 1.653.244 2.872.12 3.176.77.84 1.234 1.913 1.234 3.222 0 4.61-2.805 5.625-5.478 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.297 0 .322.218.698.826.58A12.005 12.005 0 0 0 24 12C24 5.373 18.627 0 12 0z" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
              <path d="M22.675 0H1.326C.594 0 0 .588 0 1.313v21.375C0 23.414.593 24 1.326 24H12.82v-9.294H9.692V10.97h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.098 2.795.143v3.244h-1.917c-1.503 0-1.794.715-1.794 1.763v2.309h3.587l-.467 3.737h-3.12V24h6.116c.733 0 1.326-.588 1.326-1.313V1.313C24 .588 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
              <path d="M24 4.556c-.883.392-1.832.656-2.828.775a4.93 4.93 0 0 0 2.165-2.724 9.863 9.863 0 0 1-3.127 1.196 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149 4.919 4.919 0 0 0 3.195 9.7a4.903 4.903 0 0 1-2.228-.616v.062a4.922 4.922 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.924 4.924 0 0 0 4.6 3.417 9.868 9.868 0 0 1-6.102 2.103c-.396 0-.786-.023-1.17-.069a13.945 13.945 0 0 0 7.548 2.212c9.051 0 13.998-7.496 13.998-13.997 0-.213-.004-.425-.014-.636A10.004 10.004 0 0 0 24 4.556z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Section: Streamit App */}
      <div className="footer-right">
        <h4>Streamit App</h4>
        <div className="app-links">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="appstore.png" alt="App Store" className="app-icon" />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="playstore.png" alt="Google Play" className="app-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

