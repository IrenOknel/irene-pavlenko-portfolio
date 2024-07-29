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
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={js} alt="JavaScript" />
        <img src={react} alt="React" />
        <img src={nodejs} alt="Node.js" />
        <img src={mongodb} alt="MongoDB" />
      </div>
    </section>
  );
};

export default Technologies;
