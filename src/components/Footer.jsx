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
        {/* <div className="footer--social--icon"> */}
            <a href="https://github.com/DavidMurgulet"
              className='btn--social-github'>
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/davidmurgulet/"
              className='btn--social-linkedin'>
              <FaLinkedin size={32} />
            </a>
            <a href="https://www.linkedin.com/in/davidmurgulet/"
              className='btn--social-linkedin'>
              <FaInstagram size={32} />
            </a>
        {/* </div> */}
      </div>


    </footer>
  );
}

export default Footer;