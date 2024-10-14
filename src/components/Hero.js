import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "My name is Irene, a web developer who crafts websites with the same joy and precision as a barista making the perfect latte.";
  const typingSpeed = 60;

  const currentIndexRef = useRef(0); // Keep track of current index

  useEffect(() => {
    const typeText = () => {
      if (currentIndexRef.current < fullText.length) {
        const nextText = fullText.substring(0, currentIndexRef.current + 1); 
        setDisplayedText(nextText);
        currentIndexRef.current++;
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText();

    return () => {
      currentIndexRef.current = fullText.length;
    };
  }, [fullText, typingSpeed]);

  return (
    <section id="hero">
      <h1 className="lobster-regular">Hello!</h1>
      <p>{displayedText}</p>
    </section>
  );
};

export default Hero;
