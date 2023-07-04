import React, { createContext, useCallback, useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Loader from './Components/Loader';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import Home from './Components/Home';
import MenuIcons from './Components/MenuIcons';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Services from './Components/Services';
import MyWorks from './Components/MyWorks';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

Aos.init();
export const ThemeContext = createContext(null);

const ParticlesComponent = React.memo(({ theme, isLoading, init }) => {
  return (
    <Particles
      className={`${isLoading ? 'hidden' : ''}`}
      id="tsparticles"
      init={init}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: theme ? '#38D9A9' : '#D314FE',
          },
          links: {
            color: theme ? '#D314FE' : '#38D9A9',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);
  }, []);

  const authInfo = {
    theme,
    toggleTheme,
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const currentPosition = window.pageYOffset;

    if (currentPosition > windowHeight / 2 && currentPosition + windowHeight !== documentHeight) {
      setShowUpButton(true);
    } else {
      setShowUpButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeContext.Provider value={authInfo}>
      <div
        className={`min-h-screen ${!theme
            ? 'bg-gradient-to-r from-[#220D3E] via-[#3D0646] to-[#4c0457]'
            : 'bg-gradient-to-r from-[#0F172A] via-[#15213d] to-[#19243f]'
          }`}
      >
        <div className={`${!theme ? 'texture-light' : 'texture-dark'}`}>
          <div>
            <ParticlesComponent
              theme={theme}
              isLoading={isLoading}
              init={init}
            />
          </div>
          <div className="sections scrollable-container">
            {isLoading ? (
              <Loader />
            ) : (
              <div className={`${theme ? 'dark' : ''}`}>
                <div className="md:max-w-5xl max-w-sm mx-auto">
                  <Link to="home" spy={true} offset={-70}>
                    <FontAwesomeIcon
                      className={`dark:text-[#00ffc3] text-[#ee00ff] animate-bounce w-9 h-9 fixed md:right-16 right-5 bottom-5 md:bottom-10 z-50 cursor-pointer ${showUpButton ? 'opacity-100' : 'hidden'
                        }`}
                      icon={faCircleArrowUp}
                    />
                  </Link>
                  {/* All sections here */}
                  <Home></Home>
                  <MenuIcons></MenuIcons>
                  <AboutMe></AboutMe>
                  <Skills></Skills>
                  <Services></Services>
                  <MyWorks></MyWorks>
                  <Contact></Contact>
                </div>
                <Footer></Footer>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
