import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://instagram.com" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
