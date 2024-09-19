import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]');
      let currentSection = 'Home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setCurrentPage(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial highlighting
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (page) => {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkClasses = (page) => {
    return `border-b-2 mx-3 sm:mx-10 transition duration-300 font-normal ${
      currentPage === page ? 'text-white border-black text-lg' : 'border-transparent hover:text-white text-gray-500'
    }`;
  };

  return (
    <motion.nav 
      initial = {{ opacity:0 }}
      animate = {{ opacity:1 }}
      transition = {{ duration:2.5, delay:3 }}

    className="fixed min-w-full shadow text-sm sm:text-lg z-50 justify-center">
      <div className="container flex items-center justify-center py-3 lg:py-5 mx-auto capitalize text-white bg-black">
        <a
          href="#Landing"
          className={linkClasses('Landing')}
          onClick={() => handleLinkClick('Landing')}
        >
          Home
        </a>
        <a
          href="#Events"
          className={linkClasses('Events')}
          onClick={() => handleLinkClick('Events')}
        >
          Events
        </a>
        <a
          href="#About"
          className={linkClasses('About')}
          onClick={() => handleLinkClick('About')}
        >
          About
        </a>
        <a
          href="#Contact"
          className={linkClasses('Contact')}
          onClick={() => handleLinkClick('Contact')}
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}

export default Header;