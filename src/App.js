import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-scroll';
import logo from './FaviconLogo.png'; 
import Demos from './Demos/Demos'; 
// import Services from './Services/Services'; 
import Gallery from './Gallery/Gallery'; 
import Contact from './Contact/Contact'; 
import About from './About/About';

import './sass/Jumbotron.css';
import './sass/Navbar.css';
import './sass/Demos.css';

import './App.css';

const App = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <div className="container">
       <HashRouter>
        <Navbar>
        <Navbar.Brand>
          <Nav.Link>
          <Link to="home" smooth={true} duration={500}>
                <img
                  src={logo}
                  width="48"
                  height="48"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="about" smooth={true} duration={500}>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="demos" smooth={true} duration={500}>Demos</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="services" smooth={true} duration={500}>Services</Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </Nav.Link>
        </Navbar.Brand>
        </Navbar>
        <Routes>
          <Route path="About" element={<About/>} />
          <Route path="Demos" element={<Demos/>}/>
          {/* <Route path="Services" element={<Services/>}/> */}
          <Route path="Gallery" element={<Gallery/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Routes>

      </HashRouter>

<div className="jumbotron" id="home">
        <img src="../FullBodyShotGimp.png"/>
    </div>

      <div className="main_block-container">

      <div id="about">
        <About />
      </div>
      <div id="demos">
        <Demos />
      </div>
      {/* <div id="services">
        <Services />
      </div> */}
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
    <div className="footer">
    <div className="socials_block">
        <ul>
          <li>
            <a href="https://x.com/RayStratos" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ray_stratos/" target="_blank">Instagram</a>
          </li>
          <li>
            <a href="https://www.twitch.tv/raystratos" target="_blank">Twitch</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/reganlussier/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.imdb.com/name/nm9216180/?ref_=fn_al_nm_1" target="_blank">IMDB</a>
          </li>
        </ul>
      </div>
      <span>&#169;Reggie Lussier 2024.</span>
    </div>

    </div>
 
    </div>
  );
};

export default App;

