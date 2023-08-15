import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { useRef } from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3acdsu9",
        "template_jo3vqpo",
        form.current,
        "n4fg2n2izyJLELZ9c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__container-2">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>Bryanglennardy.work@gmail.com</h5>
            </article>
            <article className="contact__option">
              <BiSolidPhone className="contact__option-icon" />
              <h4>Phone Number</h4>
              <h5>+6282351121869</h5>
            </article>
          </div>
          <div className="contact__socials">
            <a
              href="www.linkedin.com/in/bryan-glennardy-41923922a"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/BryanGlennardy"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/brya9xs/"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </div>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
