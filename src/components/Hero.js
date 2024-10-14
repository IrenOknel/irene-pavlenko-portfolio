import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "My\ name is Irene, a web developer who crafts websites with the same joy and precision as a barista making the perfect latte.";
  const typingSpeed = 60;

  const currentIndexRef = useRef(0); // current index with useRef

  useEffect(() => {
    const typeText = () => {
      if (currentIndexRef.current < fullText.length) {
        setDisplayedText(
          (prev) => prev + fullText.charAt(currentIndexRef.current)
        );
        currentIndexRef.current++;
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText(); // Start of the typing effect

    return () => {
      // Cleaning any pending timeouts when component unmounts
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
