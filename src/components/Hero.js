import React, { useEffect, useState } from "react";
import "./App.css";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "My name is Irene, a web developer who crafts websites with the same joy and precision as a barista making the perfect latte.";
  const typingSpeed = 60;

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(currentIndex));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText();
  }, []);

  return (
    <section id="hero">
      <h1 className="lobster-regular">Hello!</h1>
      <p>
        {displayedText}
      </p>
    </section>
  );
};

export default Hero;
