import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import React, { useState, useEffect } from "react";
import Skills from "./components/Skills";
import HomePage from "./components/Homepage";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import the up arrow icon

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      setAtBottom(scrollTop + clientHeight >= scrollHeight - 5); // Adjust tolerance as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollNextSection = () => {
    const sections = Array.from(document.querySelectorAll('main > section'));
    const viewportHeight = window.innerHeight;
    const currentScroll = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;
      if (sectionTop > currentScroll + viewportHeight / 2) {
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth',
        });
        return;
      }
    }

    // If at the last section or below halfway, scroll to the very bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`min-h-screen flex flex-col font-['Inter','sans-serif'] landscape:flex-row landscape:flex-wrap ${theme}`}>

      <header className="w-full text-center py-4 lg:py-6 bg-gradient-to-r text-[#1f2f1f] shadow-md rounded-b-none flex justify-between items-center px-4 fixed top-0 left-0 z-50 dark:bg-gradient-to-r dark:from-[#344e41] dark:to-[#3a5a40] dark:text-[#d8f3dc]">

        <div className="flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md m-0 dark:text-[#a3b18a]">
            My Portfolio
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-1 italic opacity-90 m-0 dark:text-[#d8f3dc]">Jether Masidong</p>
        </div>

        <nav className="flex gap-3 items-center m-0">
          <a href="#home" className={`px-3 py-1.5 bg-[#cde4d2] hover:bg-[#a8c3a5] text-[#1f2f1f] rounded-full shadow-sm transition-all duration-300 m-0 dark:bg-[#588157] dark:hover:bg-[#3a5a40] dark:text-[#d8f3dc]`}>
            Home
          </a>
          <a href="#about" className={`px-3 py-1.5 bg-[#cde4d2] hover:bg-[#a8c3a5] text-[#1f2f1f] rounded-full shadow-sm transition-all duration-300 m-0 dark:bg-[#588157] dark:hover:bg-[#3a5a40] dark:text-[#d8f3dc]`}>
            About Me
          </a>
          <a href="#education" className={`px-3 py-1.5 bg-[#cde4d2] hover:bg-[#a8c3a5] text-[#1f2f1f] rounded-full shadow-sm transition-all duration-300 m-0 dark:bg-[#588157] dark:hover:bg-[#3a5a40] dark:text-[#d8f3dc]`}>
            Education
          </a>
          <a href="#experience" className={`px-3 py-1.5 bg-[#cde4d2] hover:bg-[#a8c3a5] text-[#1f2f1f] rounded-full shadow-sm transition-all duration-300 m-0 dark:bg-[#588157] dark:hover:bg-[#3a5a40] dark:text-[#d8f3dc]`}>
            Experience
          </a>
          <a href="#skills" className={`px-3 py-1.5 bg-[#cde4d2] hover:bg-[#a8c3a5] text-[#1f2f1f] rounded-full shadow-sm transition-all duration-300 m-0 dark:bg-[#588157] dark:hover:bg-[#3a5a40] dark:text-[#d8f3dc]`}>
            Skills
          </a>
          <a href="#contact" className={`px-3 py-1.5 bg-[#cde4d2] hover:bg-[#a8c3a5] text-[#1f2f1f] rounded-full shadow-sm transition-all duration-300 m-0 dark:bg-[#588157] dark:hover:bg-[#3a5a40] dark:text-[#d8f3dc]`}>
            Contact
          </a>
          <button
            onClick={handleThemeSwitch}
            className="px-3 py-1.5 rounded-full shadow-sm transition-all duration-300 focus:outline-none"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>
      </header>

      <main className={`flex-grow w-full mx-auto px-0 sm:px-0 py-0 sm:py-0 landscape:space-y-0 pt-0 ${theme}`}>
        <section id="home" className="mb-0">
          <HomePage />
        </section>
        <section id="about" className="mb-0">
          <AboutMe />
        </section>
        <section id="education" className="mb-0">
          <Education />
        </section>
        <section id="experience" className="mb-0">
          <Experience />
        </section>
        <section id="skills" className="mb-0">
          <Skills />
        </section>
        <section id="contact" className="mb-0">
          <Contact />
        </section>
      </main>

      <footer className={`w-full text-center text-sm py-3 border-t m-0 ${theme === 'light' ? 'text-[#5f6f5f] border-[#cde4d2]' : 'text-[#a3b18a] border-[#3a5a40]'}`}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>

      {/* Scroll Button */}
      <button
        onClick={atBottom ? scrollToTop : scrollNextSection}
        className={`scroll-button ${atBottom ? 'at-bottom' : ''}`}
      >
        {atBottom ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );
}

export default App;