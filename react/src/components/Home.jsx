import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="menu">Menu</div>
        <div className="logo">Solidaridad</div>
        <div className="nav-links">
          <a href="#">Who we are</a>
          <a href="#">Where we work</a>
          <a href="#">What we do</a>
          <a href="#" className="contact-btn">Contact Us</a>
          
        </div>
      </header>

      <section className="hero-section">
        <div className="text-content">
          <h1>JONY'S STORY</h1>
          <h3>A Miner, an Entrepreneur</h3>
          <a href="#" className="cta-btn">Meet Jony</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
