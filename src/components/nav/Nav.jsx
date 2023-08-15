import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiFolderSimpleMinusLight } from "react-icons/pi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#skills"
        className={activeNav === "#skills" ? "active" : ""}
        onClick={() => setActiveNav("#skills")}
      >
        <HiOutlineLightBulb />
      </a>
      <a
        href="#portofolio"
        className={activeNav === "#portofolio" ? "active" : ""}
        onClick={() => setActiveNav("#portofolio")}
      >
        <PiFolderSimpleMinusLight />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
