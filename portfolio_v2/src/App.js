import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// import Snowfall from 'react-snowfall';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Footer from './components/Layout/Footer';

import { Link } from 'react-scroll';

import { FaSun, FaMoon } from 'react-icons/fa'
import Saisons from './components/Layout/SaisonList.json'

export default function App() {
  const [saisonOpen, setSaisonOpen] = useState(false);
  const [mode, setMode] = useState('light');
  const [saison, setSaison] = useState('hiver');
  const [backgroundImage, setBackgroundImage] = useState('imgHiverJ');
  const [lastBg, setLastBg] = useState(null);
  const [transition, setTransition] = useState(false);
  console.log(mode, saison);

  const chooseBg = (i, k) => {
    if (i === 'light') {
      switch (k) {
        case 'hiver':
          setBackgroundImage(Saisons[2].urlPhotoJour);
          break;
        case 'ete': 
          setBackgroundImage(Saisons[0].urlPhotoJour);
          break;
        case 'automne':
          setBackgroundImage(Saisons[1].urlPhotoJour);
          break;
        case 'printemps':
          setBackgroundImage(Saisons[3].urlPhotoJour);
          break;
      }
    } else {
      switch (k) {
        case 'hiver':
          setBackgroundImage(Saisons[2].urlPhotoNuit);
          break;
        case 'ete': 
          setBackgroundImage(Saisons[0].urlPhotoNuit);
          break;
        case 'automne':
          setBackgroundImage(Saisons[1].urlPhotoNuit);
          break;
        case 'printemps':
          setBackgroundImage(Saisons[3].urlPhotoNuit);
          break;
      }
    }
  };
  useEffect(() => {
    if (backgroundImage) {
      setTimeout(() => setTransition(true), 10)
    }
    if (lastBg) {
      setTimeout(() => setTransition(true), 10)
    }
  }, [backgroundImage, lastBg]);
  useEffect(() => {
    chooseBg(mode, saison);
    setLastBg(backgroundImage);
  }, [mode, saison])
  return (
    <div className={[
      '',
      mode && `theme-${mode}`,
      saison && `theme-${saison}`
    ].filter(Boolean).join(' ')}>
      <header className='sticky top-0 z-50'>
      <nav className='backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-blue-200 px-4 fixed top-0 z-10 bg-white w-full'>
        <div className='flex items-center justify-between h-16'>
          <Link className='font-semibold text-onNeutralBg' activeClass='active' smooth spy to='home'>
            Accueil
          </Link>
          <ul className='flex justify-between space-x-4'>
            <li className='font-semibold text-onNeutralBg'>
              <Link activeClass='active' smooth spy to='about'>
                <h4 className='primary'>About</h4>
              </Link>
            </li>
            <li className='font-semibold text-onNeutralBg'>
              <Link activeClass='active' smooth spy to='skills'>
                <h4 className='primary'>Competence</h4>
              </Link>
            </li>
            <li className='font-semibold text-onNeutralBg'>
              <Link activeClass='active' smooth spy to='portfolio'>
                <h4 className='primary'>Portfolio</h4>
              </Link>
            </li>
            <li className='font-semibold text-onNeutralBg'>
              <Link activeClass='active' smooth spy to='formation'>
                <h4 className='primary'>Formation</h4>
              </Link>
            </li>
            <li className='font-semibold text-onNeutralBg'>
              <Link activeClass='active' smooth spy to='contact'>
                <h4 className='primary'>Contact</h4>
              </Link>
            </li>
            <li className='flex flex-col'>
              {mode === 'dark' ? (
                <FaSun 
                  onClick={() => setMode(mode === 'dark' ? 'light' : 'dark') & setSaison(saison) & setTransition(false)}
                  className="text-yellow-500 text-2xl cursor-pointer"
                />
              ) : (
                <FaMoon 
                  onClick={() => setMode(mode === 'dark' ? 'light' : 'dark') & setSaison(saison) & setTransition(false)}
                  className="text-blue-400 text-2xl cursor-pointer"               
                />
              )}
            </li>
            <li>
              <button id='themeDd'
                onClick={() => setSaisonOpen((prev) => !prev)}
                className='font-semibold text-onNeutralBg'
              >
              Saison
              </button>
              {saisonOpen && (
              <div className={`ui-checked:text-onPrimaryBg absolute flex flex-col rounded-lg p-2`}>
                {Saisons.map((item, i) => (
                  <button key={i} onClick={() => setSaison(item.saison) & setSaisonOpen((prev) => !prev) & setTransition(false)}>{item.saison}</button>
                ))}
              </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
          <CSSTransition 
            in={transition}
            timeout={10}
            classNames="fade"
            unmountOnExit
          >
            <img id='actualBg' className='image min-h-screen bg-cover bg-center bg-no-repeat' src={`${backgroundImage}`}></img>
          </CSSTransition>
          <img id='lastBg' className='image min-h-screen bg-cover bg-center bg-no-repeat' src={`${lastBg}`}></img>
        <section id='home' className='h-screen grid items-center justify-center relative z-9'>
          <Home />
        <div>
          {/* <Snowfall 
            color='white'
            snowflakeCount={200}
          /> */}
        </div>
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='portfolio'>
          <Portfolio />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      <Footer />
    </div>
  )
}