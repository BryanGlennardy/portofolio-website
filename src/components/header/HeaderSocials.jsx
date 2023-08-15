import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="www.linkedin.com/in/bryan-glennardy-41923922a"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/BryanGlennardy" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/brya9xs/" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
