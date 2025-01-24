import React from 'react';
import '../styles/AboutUs.css'; // Create this CSS file for styling
import "./pages/AboutUs.jsx";


function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About MovieMagic</h1>

      <section className="app-origin">
        <h2>Our Story</h2>
        <p>MovieMagic was born out of a passion for cinema and a desire to revolutionize how people discover and enjoy movies. Founded in 2025 by a team of film enthusiasts and tech innovators, we set out to create an app that brings the magic of movies to your fingertips.</p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>At MovieMagic, our mission is to enhance the movie-watching experience by providing a platform that connects film lovers with their perfect next watch. We strive to make movie discovery an exciting journey, powered by cutting-edge technology and a deep love for cinema.</p>
      </section>

      <section className="unique-features">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li>AI-powered personalized recommendations</li>
          <li>Comprehensive movie database with in-depth information</li>
          <li>Social features for sharing reviews and creating watch parties</li>
          <li>Seamless integration with major streaming platforms</li>
        </ul>
      </section>

      <section className="our-team">
        <h2>Meet the Team</h2>
        {/* Add team member components here */}
        <p>Our diverse team of film buffs, developers, and UX designers work tirelessly to bring you the best movie app experience possible.</p>
      </section>

      <section className="future-vision">
        <h2>Looking Ahead</h2>
        <p>We're constantly evolving and improving MovieMagic. Our vision for the future includes expanding our global movie database, introducing virtual reality previews, and creating a vibrant community of movie enthusiasts.</p>
      </section>
    </div>
  );
}

export default AboutUs;
