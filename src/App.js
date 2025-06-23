import React, { useState, useEffect } from 'react';
import './style.css';
// Note: We're using style.css for all our styles instead of App.css

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle navigation - now scrolls to section instead of hiding/showing
  const handleNavigation = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 60; // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    window.history.pushState(null, null, `#${section}`);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const navbarHeight = 60;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        handleNavigation(hash);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initialize from URL hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
      setTimeout(() => handleNavigation(initialHash), 100);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />
      
      <main className="main-content">
        <div id="home" className="section">
          <Home />
        </div>
        <div id="about" className="section">
          <About />
        </div>
        <div id="projects" className="section">
          <Projects />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
