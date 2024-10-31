// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>My Portfolio</h3>
        <nav className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="social-media">
          <h4>Connect with me</h4>
          <ul>
            <li><a href="https://github.com/ndakalajulius" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            <li><a href="https://linkedin.com/in/juliusndakala" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://twitter.com/juliusndakala" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://instagram.com/juliusndakala" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
