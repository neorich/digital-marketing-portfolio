
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Campaigns from './components/Campaigns';
import Education from './components/Education';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import { campaignData } from './constants';
import { LinkedInIcon, EmailIcon, PhoneIcon } from './components/Icons';

const SocialLinks: React.FC = () => (
  <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-10">
    <a href="https://www.linkedin.com/in/mayank3pandey/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300">
      <LinkedInIcon className="w-6 h-6" />
    </a>
    <a href="mailto:makemerichmp@gmail.com" aria-label="Email" className="p-2 text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300">
      <EmailIcon className="w-6 h-6" />
    </a>
    <a href="tel:+917869207670" aria-label="Phone" className="p-2 text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300">
      <PhoneIcon className="w-6 h-6" />
    </a>
    <div className="w-px h-24 bg-slate mt-2"></div>
  </div>
);

const EmailLink: React.FC = () => (
   <div className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-10">
      <a href="mailto:makemerichmp@gmail.com" className="p-2 text-sm text-slate hover:text-teal transition-colors duration-300 tracking-widest" style={{ writingMode: 'vertical-rl' }}>
        makemerichmp@gmail.com
      </a>
      <div className="w-px h-24 bg-slate mt-4"></div>
   </div>
);


const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section-hidden');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  
  return (
    <div className="relative">
      <CursorGlow />
      <Header isScrolled={isScrolled} />
      <SocialLinks />
      <EmailLink />
      <main className="container mx-auto px-6 md:px-12 lg:px-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Campaigns campaigns={campaignData} />
        <Education />
        <Contact />
      </main>
      <footer className="text-center py-8 text-slate mt-12">
        {/* Social Links for Mobile */}
        <div className="flex md:hidden justify-center space-x-8 mb-8">
          <a href="https://www.linkedin.com/in/mayank3pandey/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-slate hover:text-teal transition-colors duration-300">
            <LinkedInIcon className="w-7 h-7" />
          </a>
          <a href="mailto:makemerichmp@gmail.com" aria-label="Email" className="p-2 text-slate hover:text-teal transition-colors duration-300">
            <EmailIcon className="w-7 h-7" />
          </a>
          <a href="tel:+917869207670" aria-label="Phone" className="p-2 text-slate hover:text-teal transition-colors duration-300">
            <PhoneIcon className="w-7 h-7" />
          </a>
        </div>
        <div className="text-xs">
          <p>Designed & Built by a World-Class AI Engineer</p>
          <p className="mt-1">Inspired by Mayank Pandey's achievements.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
