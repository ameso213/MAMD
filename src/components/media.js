// SocialMediaLinks.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './media.css';

const SocialMediaLinks = () => {
  return (
    <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
    </div>
  );
};

export default SocialMedia;
