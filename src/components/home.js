import React from "react";
import "./home.css";

function App() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">Mama D Restaurant</div>
        <nav className="nav">
          <a href="#menu">Menu</a>
          <a href="#feedback">Feedback</a>
          <a href="#about">About Us</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>MAMA D RESTAURANT</h1>
          <p>Tastes more delicious like your mother’s</p>
          <button className="order-button">Order Now!</button>
        </div>
        <div className="hero-image">
          <img src="hero-image.jpg" alt="Delicious food" />
        </div>
      </section>

      <section className="categories">
        <div className="category">
          <img src="breakfast.jpg" alt="Breakfast" />
          <p>BREAKFAST</p>
        </div>
        <div className="category">
          <img src="snacks.jpg" alt="Snacks" />
          <p>SNACKS</p>
        </div>
        <div className="category">
          <img src="meals.jpg" alt="Meals" />
          <p>MEALS</p>
        </div>
        <div className="category">
          <img src="wraps.jpg" alt="Wraps" />
          <p>WRAPS</p>
        </div>
        <div className="category">
          <img src="drinks.jpg" alt="Drinks" />
          <p>DRINKS</p>
        </div>
        <div className="category">
          <img src="curries.jpg" alt="Curries" />
          <p>CURRIES</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="social-media">
          <a href="#" className="social-icon">X</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">TikTok</a>
        </div>
        <p>&copy; 2024 Mama D. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
