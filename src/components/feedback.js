import React, { useState } from "react";
import "./feedback.css"; 

function Feedback() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleFeedbackClick = () => {
    setShowFeedbackForm(true);
  };

  return (
    <div className="App">
      {!showFeedbackForm ? (
        <div className="testimonials-section">
          <h2>TESTIMONIALS</h2>
          <p>What people say about us</p>
          <div className="testimonials">
            <div className="testimonial-card">
              <img
                src=""
                alt="Customer 1"
                className="testimonial-image"
              />
              <p className="testimonial-text">
              "The first time I ordered lunch from Mama D Restaurant, it was delivered on
               time, and since then, I have been ordering my food from there." – Bosco
              </p>
              <p className="testimonial-rating">★★★★★</p>
            </div>
            <div className="testimonial-card">
              <img
                src=""
                alt="Customer 2"
                className="testimonial-image"
              />
              <p className="testimonial-text">
              "Mama D Restaurant prepares the healthiest and most delicious food,
               and as a doctor, I prefer ordering all my meals from there." – Dr. Jane
              </p>
              <p className="testimonial-rating">★★★★★</p>
            </div>
            <div className="testimonial-card">
              <img
                src="https://via.placeholder.com/100"
                alt="Customer 3"
                className="testimonial-image"
              />
              <p className="testimonial-text">
              "I always buy my breakfast from 'Mama D Restaurant' because their
               prices are affordable for a student like me." - Doreen
              </p>
              <p className="testimonial-rating">★★★★★</p>
            </div>
          </div>
          <button className="feedback-button" onClick={handleFeedbackClick}>
            Give us your feedback →
          </button>
        </div>
      ) : (
        <div className="feedback-form-section">
          <div className="feedback-form-container">
            <h2>Feedback</h2>
            <form className="feedback-form">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
              <label>E-mail Address</label>
              <input type="email" placeholder="Your Email" />
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
              <label>Message</label>
              <textarea placeholder="Your Message"></textarea>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feedback;
