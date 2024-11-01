// src/pages/Home.js
import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
