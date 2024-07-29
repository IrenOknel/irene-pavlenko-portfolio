import React from "react";
import email from "../assets/email.png";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="irenpavlenko22@gmail.com">
          <img src={email} alt="Email" />
        </a>
        <a
          href="https://github.com/IrenOknel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/irenepavlenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
