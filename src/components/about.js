import React from "react";
import "./about.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* WHO WE ARE Section */}
      <section className="about-section">
        <h1 className="main-heading">About Us</h1>
        <h2 className="sub-heading">WHO WE ARE</h2>
        <div className="about-content">
          <img
            src="../components\mmm.jpeg"
            alt="Mama D's Chef"
            className="about-image"
          />
          <p className="about-description">
            Mama D's restaurant is a lively culinary destination located in Kira
            - Kyaliwajjala Opposite Prime Petrol Station. It opens every day
            from 7 AM to midnight. It offers a diverse menu featuring both local
            dishes that celebrate regional flavors and international cuisine
            that caters to a global palate. The warm, inviting atmosphere makes
            it a favorite spot for both locals and tourists.
          </p>
        </div>
      </section>

      {/* More About Section */}
      <section className="about-section">
        <h2 className="sub-heading">More About Mama D Restaurant</h2>
        <div className="about-content">
          <p className="about-description">
            Mama D Restaurant recently participated in the World Cookathon,
            aiming to set a Guinness World Record. Our talented chefs showcased
            local and international cuisines with a focus on healthy
            ingredients. This event celebrated cooking joy and community
            spirit, inviting guests to experience our diverse flavors and
            reinforcing our mission to create memorable dining experiences.
          </p>
          <iframe
            src="path-to-video.mp4"
            title="World Cookathon"
            className="about-video"
          />
        </div>
      </section>

      {/* Meet Our Chef Section */}
      <section className="about-section">
        <h2 className="sub-heading">Meet Our Chef</h2>
        <div className="chef-content">
          <img
            src="."
            alt="Chef Harry"
            className="chef-image"
          />
          <p className="about-description">
            Chef Harry at Mama D Restaurant crafts innovative dishes with local
            ingredients, offers cooking classes, and promotes community
            engagement for an inclusive dining experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
