import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>
        Contact <span>Us</span>
      </h1>

      <div className="contact-details">
        {/* Left Section */}
        <div
          className="contact-info"
          style={{
            backgroundImage: "url(/images/mam.jpeg)", // Correct path to image in public folder
          }}
        >
          <h2>Get In Touch With Us</h2>
          <p>
            We are located along Kira Rd in Kyaliwajjala, opposite Prime Petrol
            Station.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:dkirabb@gmail.com" aria-label="Email">
              dkirabb@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+256782767891" aria-label="Phone">
              +256 782 767891
            </a>
          </p>
          <p>We open from 7 am to late midnight.</p>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              required
              aria-label="Name"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              aria-label="Email"
            />
            <input
              type="text"
              placeholder="Your Subject"
              aria-label="Subject"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              aria-label="Message"
            ></textarea>
            <button type="submit" aria-label="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31586.269138372133!2d32.58366116728316!3d0.3315507201654419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb481d319849%3A0x6bc758c3a7c8962b!2sKyaliwajjala!5e0!3m2!1sen!2sug!4v1690000000000!5m2!1sen!2sug"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>

      {/* Footer Note
      <footer>
        <p>“We're here to serve like your mother.”</p>
      </footer> */}
    </div>
  );
};

export default ContactUs;
