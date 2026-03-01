import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    const nav = document.querySelector('.nav'); // your navbar element
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    const elementPosition =
      elementRef.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };


  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, skillsRef, contactRef }}
      />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;
