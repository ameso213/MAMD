import React from "react";
import "./footer.css";

const Footer = ({ onLinkClick }) => {
  return (
    <footer>
      <a href="#" onClick={() => onLinkClick("Terms of Use")}>TERMS OF USE</a>
      <a href="#" onClick={() => onLinkClick("Privacy Policy")}>PRIVATE POLICY</a>
      <a href="#" onClick={() => onLinkClick("Contact Us")}>CONTACT US</a>
      <a href="#" onClick={() => onLinkClick("Social Media")}>SOCIAL MEDIA </a>
      {/* <div className="social-icons">
      <a href="#"><img src="instagram-icon.png" alt="Twitter" /></a>
        <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
        <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="tiktok-icon.png" alt="TikTok" /></a>
      </div> */}
      <hr />
      <p>© 2025 Mama D. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
