import React from "react";
import "./Header.css";
import Cv from "./../../assets/cv.pdf";
import Me from "./../../assets/me.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";

function Header() {
  return (
    <header className="container header__container" id="header">
      <h5>Hello I'm</h5>
      <h1>Abdullah</h1>
      <h5 className="text-light">Full Stack Web Developer</h5>
      <div className="cta">
        <a href={Cv} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/abdullah-soomro-6b6798246/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/AbdullahSoomroOfficial" target="_blank">
          <FaGithub />
        </a>
        {/* <a href="https://dribbble.com" target="_blank">
          <FiDribbble />
        </a> */}
      </div>
      <div className="me">
        <img src={Me} alt="Me" />
      </div>
      <a href="#about" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
}

export default Header;
