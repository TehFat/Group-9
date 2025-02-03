import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About MovieMagic</h1>

      <section className="app-origin">
        <h2 className="section-title">Our Story</h2>
        <p>
          MovieMagic was born out of a passion for cinema and a desire to revolutionize how people discover and enjoy movies. Founded in 2025 by a team of film enthusiasts and tech innovators, we set out to create an app that brings the magic of movies to your fingertips.
        </p>
      </section>

      <section className="our-mission">
        <h2 className="section-title">Our Mission</h2>
        <p>
          At MovieMagic, our mission is to enhance the movie-watching experience by providing a platform that connects film lovers with their perfect next watch. We strive to make movie discovery an exciting journey, powered by cutting-edge technology and a deep love for cinema.
        </p>
      </section>

      <section className="unique-features">
        <h2 className="section-title">What Sets Us Apart</h2>
        <ul className="feature-list">
          <li>AI-powered personalized recommendations</li>
          <li>Comprehensive movie database with in-depth information</li>
          <li>Social features for sharing reviews and creating watch parties</li>
          <li>Seamless integration with major streaming platforms</li>
        </ul>
      </section>

      <section className="our-team">
        <h2 className="section-title">Meet the Team</h2>
        <ul>
          <li>
          Klejda Mama{' '}
            <a href="https://github.com/klejda59" target="_blank" rel="noopener noreferrer" className="github-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.799 8.207 11.387.6.111.793-.26.793-.578 0-.284-.01-1.04-.015-2.048-3.338.727-4.04-1.622-4.04-1.622-.544-1.37-1.327-1.734-1.327-1.734-1.084-.745.083-.731.083-.731 1.198.084 1.827 1.231 1.827 1.231 1.064 1.82 2.794 1.297 3.476.99.107-.771.416-1.298.756-1.597-2.667-.306-5.467-1.334-5.467-5.93 0-1.307.466-2.376 1.237-3.22-.124-.306-.535-.904.237-1.847 0 0 .874-.276 2.87 1.055 1.039-.29 2.15-.429 3.25-.429 1.1 0 2.21.139 3.25.429 1.996-1.331 2.87-1.055 2.87-1.055.773.943.362 1.541.238 1.847.771.844 1.237 1.913 1.237 3.22 0 4.607-2.81 5.624-5.476 5.93.43.371.823 1.104.823 2.224 0 1.61-.015 2.912-.015 3.303 0 .318.191.692.797.578 4.768-1.588 8.207-6.084 8.207-11.387 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </li>
          <li>
          Tahir Mehmood{' '}
            <a href="https://github.com/tahirmehmood22" target="_blank" rel="noopener noreferrer" className="github-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.799 8.207 11.387.6.111.793-.26.793-.578 0-.284-.01-1.04-.015-2.048-3.338.727-4.04-1.622-4.04-1.622-.544-1.37-1.327-1.734-1.327-1.734-1.084-.745.083-.731.083-.731 1.198.084 1.827 1.231 1.827 1.231 1.064 1.82 2.794 1.297 3.476.99.107-.771.416-1.298.756-1.597-2.667-.306-5.467-1.334-5.467-5.93 0-1.307.466-2.376 1.237-3.22-.124-.306-.535-.904.237-1.847 0 0 .874-.276 2.87 1.055 1.039-.29 2.15-.429 3.25-.429 1.1 0 2.21.139 3.25.429 1.996-1.331 2.87-1.055 2.87-1.055.773.943.362 1.541.238 1.847.771.844 1.237 1.913 1.237 3.22 0 4.607-2.81 5.624-5.476 5.93.43.371.823 1.104.823 2.224 0 1.61-.015 2.912-.015 3.303 0 .318.191.692.797.578 4.768-1.588 8.207-6.084 8.207-11.387 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </li>
          <li>
          Mehran Ahmadnia{' '}
            <a href="https://github.com/gonibarjin" target="_blank" rel="noopener noreferrer" className="github-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.799 8.207 11.387.6.111.793-.26.793-.578 0-.284-.01-1.04-.015-2.048-3.338.727-4.04-1.622-4.04-1.622-.544-1.37-1.327-1.734-1.327-1.734-1.084-.745.083-.731.083-.731 1.198.084 1.827 1.231 1.827 1.231 1.064 1.82 2.794 1.297 3.476.99.107-.771.416-1.298.756-1.597-2.667-.306-5.467-1.334-5.467-5.93 0-1.307.466-2.376 1.237-3.22-.124-.306-.535-.904.237-1.847 0 0 .874-.276 2.87 1.055 1.039-.29 2.15-.429 3.25-.429 1.1 0 2.21.139 3.25.429 1.996-1.331 2.87-1.055 2.87-1.055.773.943.362 1.541.238 1.847.771.844 1.237 1.913 1.237 3.22 0 4.607-2.81 5.624-5.476 5.93.43.371.823 1.104.823 2.224 0 1.61-.015 2.912-.015 3.303 0 .318.191.692.797.578 4.768-1.588 8.207-6.084 8.207-11.387 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </li>
          <li>
           Tehreem Fatima {' '}
            <a href="https://github.com/tehfat" target="_blank" rel="noopener noreferrer" className="github-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.799 8.207 11.387.6.111.793-.26.793-.578 0-.284-.01-1.04-.015-2.048-3.338.727-4.04-1.622-4.04-1.622-.544-1.37-1.327-1.734-1.327-1.734-1.084-.745.083-.731.083-.731 1.198.084 1.827 1.231 1.827 1.231 1.064 1.82 2.794 1.297 3.476.99.107-.771.416-1.298.756-1.597-2.667-.306-5.467-1.334-5.467-5.93 0-1.307.466-2.376 1.237-3.22-.124-.306-.535-.904.237-1.847 0 0 .874-.276 2.87 1.055 1.039-.29 2.15-.429 3.25-.429 1.1 0 2.21.139 3.25.429 1.996-1.331 2.87-1.055 2.87-1.055.773.943.362 1.541.238 1.847.771.844 1.237 1.913 1.237 3.22 0 4.607-2.81 5.624-5.476 5.93.43.371.823 1.104.823 2.224 0 1.61-.015 2.912-.015 3.303 0 .318.191.692.797.578 4.768-1.588 8.207-6.084 8.207-11.387 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </li>
          {/* Add more team members with GitHub links */}
        </ul>
      </section>

      <section className="future-vision">
        <h2 className="section-title">Looking Ahead</h2>
        <p>
          We're constantly evolving and improving MovieMagic. Our vision for the future includes expanding our global movie database, introducing virtual reality previews, and creating a vibrant community of movie enthusiasts.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
