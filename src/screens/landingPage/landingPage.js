import React, { useState, useEffect } from 'react';
import './landingPage.css';
import '../../App.css';
import assets from '../../assets-map';
import Card from '../../components/cards/card';

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        // Show navigation bar when scrolling past a certain point
        setShowNav(position > window.innerHeight * 0.5);

        // Get section elements
        const homeSection = document.getElementById('home');
        const projectsSection = document.getElementById('projects');
        const profileSection = document.getElementById('profile');

        // Ensure sections exist before accessing offsetTop
        if (homeSection && projectsSection && profileSection) {
          const homeTop = homeSection.offsetTop;
          const projectsTop = projectsSection.offsetTop;
          const profileTop = profileSection.offsetTop;

          // Determine active section based on scroll position
          if (position < projectsTop - 50) {
            setActiveSection('home');
          } else if (position >= projectsTop - 50 && position < profileTop - 50) {
            setActiveSection('projects');
          } else {
            setActiveSection('profile');
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
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
        id="home"
      >
        <img
          src={assets.bgImage}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <h1
          className="text-6xl font-bold text-white z-10"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        >
          Kenny's Odyssey
        </h1>
      </div>

      <div className="min-h-screen bg-gray-100" style={{ backgroundColor: '#0B0B0F' }}>
        <nav
          className={`fixed top-0 right-0 p-4 z-50 transition-all duration-300 ease-in-out text-white mr-8 ${
            showNav ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <ul className="flex space-x-4">
            <li className="nav-item">
              <a
                href="#home"
                className={`text-lg font-semibold hover:text-gray-600 p-2 rounded ${
                  activeSection === 'home' ? 'text-black bg-white' : 'text-white bg-transparent'
                }`}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className={`text-lg font-semibold hover:text-gray-600 p-2 rounded ${
                  activeSection === 'projects' ? 'text-black bg-white' : 'text-white bg-transparent'
                }`}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#profile"
                className={`text-lg font-semibold hover:text-gray-600 p-2 rounded ${
                  activeSection === 'profile' ? 'text-black bg-white' : 'text-white bg-transparent'
                }`}
              >
                Profile
              </a>
            </li>
          </ul>
        </nav>

        {/* First Screen (Home) */}
        <div className="container mx-auto px-32 py-16 flex items-center justify-between min-h-screen" id="home">
          {/* Left column */}
          <div className="flex flex-col max-w-xl block">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2 text-white">Hello,</h1>
              <h1 className="text-4xl font-bold mb-4 text-white">I'm Kenny Geraldy Chandra</h1>
              <p className="text-xl text-gray-400">Front End Developer From Indonesia</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 block">
            <img
              src={assets.kenChar}
              alt="Kenny Geraldy Chandra"
              className="w-96 h-auto object-cover"
            />
          </div>

          {/* Right column */}
          <div className="flex-1 flex-row block">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 ml-8 text-white">ABOUT ME</h2>
              <p className="text-gray-400 mb-4 ml-8 text-justify">
                I'm a very principled person, I have never underestimated any task that was given to me. I will always try to carry out any task given to the utmost best of my abilities.
              </p>
              <a href="#" className="text-white hover:underline ml-8">
                LEARN MORE →
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold ml-8 mb-4 text-white">MY WORK</h2>
              <p className="text-gray-400 mb-4 ml-8 text-justify">
                So far I have created various projects to improve my skills related to programming with various programming languages and tools.
              </p>
              <a href="#" className="text-white hover:underline ml-8">
                BROWSE PORTFOLIO →
              </a>
            </div>

            <div className="mt-8 ml-8 flex space-x-4">
              <a href="https://www.instagram.com/kenny_geraldy/">
                <img src={assets.igIcon} alt="Instagram" className="w-6" />
              </a>
              <a href="https://www.linkedin.com/in/kenny-geraldy-chandra-255aaa202/">
                <img src={assets.linkedInIcon} alt="LinkedIn" className="w-6" />
              </a>
              <a href="https://github.com/kennygeraldy">
                <img src={assets.githubIcon} alt="GitHub" className="w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Second Screen (Projects) */}
        <div className="min-h-screen p-20" id="projects">
          <h1 className="text-4xl font-bold mb-2 mt-8 text-white text-center fade-in">Programming</h1>
          <h1 className="text-4xl font-bold mb-2 text-white text-center fade-in">Language, Library, and Tools</h1>
          <p className="text-gray-400 mb-4 ml-8 text-center fade-in">
            Below are programming languages, libraries, and tools that I have learned on my journey
          </p>

          <div className="mt-20 flex gap-10 justify-center">
            <img src={assets.javaScriptIcon} alt="JavaScript icon" className="w-20 fade-in devIcon" />
            <img src={assets.htmlIcon} alt="Html icon" className="w-20 fade-in devIcon" />
            <img src={assets.cssIcon} alt="CSS icon" className="w-20 fade-in devIcon" />
            <img src={assets.typeScriptIcon} alt="TypeScript icon" className="w-20 fade-in devIcon" />
            <img src={assets.tailwindIcon} alt="Tailwind icon" className="w-20 fade-in devIcon" />
            <img src={assets.reactIcon} alt="React icon" className="w-20 fade-in devIcon" />
            <img src={assets.gitlabIcon} alt="GitLab icon" className="w-20 fade-in devIcon" />
          </div>
          <div className="mt-8 flex gap-10 justify-center">
            <img src={assets.javaIcon} alt="Java icon" className="w-20 fade-in devIcon" />
            <img src={assets.angularIcon} alt="Angular icon" className="w-20 fade-in devIcon" />
            <img src={assets.mySqlIcon} alt="MySQL icon" className="w-20 fade-in devIcon" />
            <img src={assets.kotlinIcon} alt="Kotlin icon" className="w-20 fade-in devIcon" />
            <img src={assets.pythonIcon} alt="Python icon" className="w-20 fade-in devIcon" />
            <img src={assets.androidStudioIcon} alt="Android Studio icon" className="w-20 fade-in devIcon" />
          </div>
        </div>

        {/* Third Screen (Profile) */}
        <div className="min-h-screen p-20" id="profile">
          <h1 className="text-4xl font-bold mb-2 text-white text-center fade-in">Latest Project</h1>
          <div class="cardWrapper" className='flex justify-center items-center gap-7 fade-in'>
            <Card /> <Card /> <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
