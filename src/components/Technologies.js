import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";

const Technologies = () => {
  return (
    <section id="technologies">
      <h2>Technologies</h2>
      <div className="tech-icons">
        <figure className="tech-icon">
          <img src={html} alt="HTML" />
          <figcaption>HTML</figcaption>
        </figure>
        <figure className="tech-icon">
          <img src={css} alt="CSS" />
          <figcaption>CSS</figcaption>
        </figure>
        <figure className="tech-icon">
          <img src={js} alt="JavaScript" />
          <figcaption>JavaScript</figcaption>
        </figure>
        <figure className="tech-icon">
          <img src={react} alt="React" />
          <figcaption>React</figcaption>
        </figure>
        <figure className="tech-icon">
          <img src={nodejs} alt="Node.js" />
          <figcaption>Node.js</figcaption>
        </figure>
        <figure className="tech-icon">
          <img src={mongodb} alt="MongoDB" />
          <figcaption>MongoDB</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Technologies;
