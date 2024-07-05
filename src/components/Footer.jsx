import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer--container">

      <div className="footer--content--container">
        <p className="footer--content">Made by David</p>
      </div>

      <div className="footer--link--container">
      <a href="https://github.com/davidmurgulet" className="footer--link" target="_blank" rel="noopener noreferrer">
        <FaGithub className="footer--icon" />
      </a>
      <a href="https://linkedin.com/in/davidmurgulet/" className="footer--link" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="footer--icon" />
      </a>
      <a href="https://instagram.com/yourusername" className="footer--link" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="footer--icon" />
      </a>
      </div>
    </footer>
  );
}

export default Footer;