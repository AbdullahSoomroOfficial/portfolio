import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";

function Nav() {
  const [isActive, setIsActive] = useState("#header");

  useEffect(() => {
    const sections = [
      "#header",
      "#about",
      "#experience",
      "#services",
      "#projects",
      "#contact",
    ];

    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("1===>>>", entry.target);
          setIsActive(`#${entry.target.id}`);
          return;
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });

    sections
      .map((section) => {
        let elem = document.querySelector(section);
        console.log("===>>>", elem);
        return elem;
      })
      .forEach((section) => {
        observer.observe(section);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <a
        href="#header"
        className={isActive === "#header" ? "active" : ""}
        onClick={() => {
          setIsActive("#header");
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
