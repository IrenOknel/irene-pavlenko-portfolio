import React from "react";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import Navigation from "./Navigation";
import "./App.css";

const App = () => (
  <div>
    <Navigation />
    <Hero />
    <About />
    <Technologies />
    <Projects />
    <Contact />
  </div>
);

export default App;