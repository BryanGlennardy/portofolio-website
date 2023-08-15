import React from "react";
import "./experience.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const data = [
  {
    id: 2,
    date: "Aug 2020 - Apr 2021",
    position: "Equipment Division - Hansan Festival 2021",
    category: "Extracurricular Activities",
    desc: "Ensuring the event to run smoothly within online conference meeting and contacting vendors for event needs.",
  },
  {
    id: 1,
    date: "Aug 2022 - Dec 2022",
    position: "Mobile Developer - PT. Central Artificial Intelligence",
    category: "Internship",
    desc: " Implemented all of the application interface based on the mockup provided by the UI/UX Designer Team using React Native.",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Working and Organization Experience & Education</h5>
      <h2>Experience & Education</h2>
      <div className=" container experience__container">
        <div className="experience__point">
          {data.map(({ id, date, position, category, desc }) => {
            return (
              <div key={id}>
                <div className="experience__content">
                  <MdOutlineWork className="experience__details-icon" />
                  <div>
                    <div class="experience__date">
                      <h4>{date}</h4>
                    </div>
                    <h3>{position}</h3>
                    <h5>{category}</h5>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="experience__point">
          <div>
            <div className="experience__content">
              <FaGraduationCap className="experience__details-icon" />
              <div>
                <div class="experience__date">
                  <h4>Aug 2019 - Aug 2023</h4>
                </div>
                <h3>Multimedia Nusantara University</h3>
                <h5>Bachelor of Informatics Engineering, Fresh Graduate</h5>
                <p>
                  I am a fresh graduate of Informatics Engineering from
                  Multimedia Nusantara University.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
