import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={isActive === "#" ? "active" : ""}
        onClick={() => {
          setIsActive("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={isActive === "#about" ? "active" : ""}
        onClick={() => {
          setIsActive("#about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={isActive === "#experience" ? "active" : ""}
        onClick={() => {
          setIsActive("#experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={isActive === "#services" ? "active" : ""}
        onClick={() => {
          setIsActive("#services");
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#projects"
        className={isActive === "#projects" ? "active" : ""}
        onClick={() => {
          setIsActive("#projects");
        }}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        className={isActive === "#contact" ? "active" : ""}
        onClick={() => {
          setIsActive("#contact");
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
