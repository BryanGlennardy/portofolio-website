import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/pavilion.png";
import IMG2 from "../../assets/sigma7.png";
import IMG3 from "../../assets/jomblo.png";
import IMG4 from "../../assets/waroenk.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Pavilion (Not Published)",
    category: "Web Programming Final Exam Group Project",
    desc: "A website that functions to make hotel reservations.",
    languages: ["HTML", "CSS", "Javacript", "PHP", "Codeigniter 4", "MySQL"],
    github: "https://github.com/BryanGlennardy/Pavillion.git",
    demo: false,
  },
  {
    id: 2,
    image: IMG2,
    title: "Sigma 7",
    category: "Expert System Final Exam Group Project",
    desc: "A website that serves to provide appropriate exercise advice for users.",
    languages: ["HTML", "CSS", "Javacript", "PHP", "Codeigniter 4", "MySQL"],
    github: "https://github.com/BryanGlennardy/Sigma-7.git",
    demo: "https://sigmaseven.000webhostapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Bosen Jomblo App (Not Published)",
    category: "Mobile Cross Platform Mid Exam Project",
    desc: "An app that works to find a partner.",
    languages: ["Ionic React", "Typescript", "CSS"],
    github: "https://github.com/BryanGlennardy/Bosen-Jomblo-App.git",
    demo: false,
  },
  {
    id: 4,
    image: IMG4,
    title: "WaroenK",
    category: "Mobile Cross Platform Final Exam Group Project",
    desc: "An application that serves to assist sellers in storing a list of items sold, purchased by customers and calculating the total price of customer purchases.",
    languages: ["Ionic React", "Typescript", "CSS", "Firebase"],
    github: "https://github.com/kaita2725/kiston-WaroenK.git",
    demo: "https://waroenk.vercel.app/",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(
          ({ id, image, title, desc, category, languages, github, demo }) => {
            return (
              <article key={id} className="portofolio__items">
                <div className="portofolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <h5>{category}</h5>
                <h4>{desc}</h4>
                <ul className="languages__list">
                  {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>

                <div className="portofolio__item-cta">
                  {github !== false && (
                    <a href={github} className="btn" rel="noopener noreferrer">
                      Github
                    </a>
                  )}
                  {demo !== false && (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portofolio;
