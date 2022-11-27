import '../App.css';

import {
  Link, animateScroll as ScrollBehavior, scrollSpy,
} from 'react-scroll';

import Formation from '../routes/Formation';
import About from '../routes/About';
import Contact from '../routes/Contact';
import Skills from '../routes/Skills';
import Portfolio from '../routes/Portfolio';
import CV from '../routes/CV';

export default function App() {
  return (
    <>
      <Header />
        <div id='body'>
          <section id='about'>
          <About />
          </section>
          <section id='skills'>
          <Skills />
          </section>
          <section id='portfolio'>
          <Portfolio />
          </section>
          <section id='formation'>
          <Formation />
          <CV />
          </section>
          <section id='contact'>
          <Contact />
          </section>
        </div>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg fixed-top'>
        <ul className='flex flex-row navbar-nav'>
          <li className='nav-item mx-1'>
            <Link style={{ textDecoration: 'none'}} activeClass='active' smooth spy to=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house top-50 start-50" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
              </svg>
            </Link>
          </li>
          <li className='nav-item mx-1'>
            <Link style={{ textDecoration: 'none', color: 'inherit'}} activeClass='active' smooth spy to='about'>
              <h4>About</h4>
            </Link>
          </li>
          <li className='nav-item mx-1'>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} activeClass='active' smooth spy to='skills'>
              <h4>Competence</h4>
            </Link>
          </li>
          <li className='nav-item mx-1'>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} activeClass='active' smooth spy to='portfolio'>
              <h4>Portfolio</h4>
            </Link>
          </li>
          <li className='nav-item mx-1'>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} activeClass='active' smooth spy to='formation'>
              <h4>Formation</h4>
            </Link>
          </li>
          <li className='nav-item mx-1'>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} activeClass='active' smooth spy to='contact'>
              <h4>Contact</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <p>
          &#169; Jérémy Quint | 2022
        </p>
      </div>
    </footer>
  );
}