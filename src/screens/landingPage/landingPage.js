import React, { useState, useEffect } from 'react';
import './landingPage.css';
import '../../App.css';
import bgImage from '../../assets/bg-img.png';
import kenChar from '../../assets/ken.png';
import igIcon from '../../assets/insta-icon.png';
import linkedInIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowNav(position > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: '#0B0B0F',
        }}
      >
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1
          className="text-6xl font-bold text-white z-10"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        >
          Ken's Odyssey
        </h1>
      </div>

      <div className="min-h-screen bg-gray-100" style={{ backgroundColor: '#0B0B0F' }}>
        {showNav && (
          <nav className="fixed top-0 right-0 p-4 z-50 shadow-md transition-opacity duration-300 ease-in-out text-white mr-8">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-lg font-semibold hover:text-gray-600">Home</a></li>
              <li><a href="#" className="text-lg font-semibold hover:text-gray-600">Projects</a></li>
              <li><a href="#" className="text-lg font-semibold hover:text-gray-600">Profile</a></li>
            </ul>
          </nav>
        )}

             {/* Main content */}
      <div className="container mx-auto px-32 py-16 flex items-center justify-between min-h-screen">
        {/* Left column */}
        <div className="flex flex-col max-w-xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2 text-white">Hello ,</h1>
            <h1 className="text-4xl font-bold mb-4 text-white">I'm Kenny Geraldy Chandra</h1>
            <p className="text-xl text-gray-400 ">Front End Developer From Indonesia</p>
          </div>
          
        </div>

        {/* Right column - Image */}
        <div className="flex-shrink-0">
          <img
            src={kenChar}
            alt="Kenny Geraldy Chandra"
            className="w-96 h-auto object-cover"
          />
        </div>
        <div className='flex-1 flex-row'>
          <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 ml-8 text-white">ABOUT ME</h2>
              <p className="text-gray-400 mb-4 ml-8 text-justify">I'm a very principled person, I have never underestimate any task that was given to me. I will always try to carry out any task given to the utmost best of my abilities. I'm trying my best to be as productive as possible while being used to work under pressure.</p>
              <a href="#" className="text-white hover:underline ml-8">LEARN MORE   →</a>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold ml-8  mb-4 text-white">MY WORK</h2>
              <p className="text-gray-400 mb-4 ml-8 text-justify">So far I have created various projects to improve my skills related to programming with various programming languages and tools.</p>
              <a href="#" className="text-white hover:underline ml-8">BROWSE PORTFOLIO   →</a>
            </div>

            <div className="mt-8 ml-8 flex space-x-4">
              <a href='https://www.instagram.com/kenny_geraldy/'><img src={igIcon} className='w-6' /></a>
              <a href='https://www.linkedin.com/in/kenny-geraldy-chandra-255aaa202/'><img src={linkedInIcon} className='w-6' /></a>
              <a href='https://github.com/kennygeraldy'><img src={githubIcon} className='w-6' /></a>
          </div>
        </div>
       
          
        
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
