import React from "react";
import "./skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__skills">
          <div className="content">
            <h3>Computer Skills</h3>
            <div className="skills__content">
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>HTML</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>CSS</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Javascript</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Typescript</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>PHP</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Codeigniter 4</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Dart</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Flutter</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>ReactJS</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>React Native</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Ionic</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Python</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>MySQL</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Figma</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Canva</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="content">
            <h3>Communication Skills</h3>
            <div className="skills__content">
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>Indonesian</h4>
                </div>
              </article>
              <article className="skills__details">
                <BsFillPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>English</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* END OF FRONTEND */}
      </div>
    </section>
  );
};

export default Skills;
