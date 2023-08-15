import React from "react";
import "./about.css";
import ME from "../../assets/bryan-about.JPG";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>1 Years of Experience</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4 Completed Projects</small>
            </article>
          </div>
          <p>
            I am a fresh graduate of Informatics Engineering from Multimedia
            Nusantara University. During my studies, I am interested in web
            development and mobile app development. My experience in both fields
            comes from exam projects and internships and I aspire to
            continuously learn and adapt to technological developments. I am a
            person who can work in groups, willing to learn and able to adapt to
            new environments. Then I aim to become a creative and skilled IT
            professional. I am committed to contributing to producing innovative
            technology solutions that can meet industry challenges and have a
            positive impact on companies and society.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
