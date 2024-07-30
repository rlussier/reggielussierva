import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from './FaviconLogo.png'; 
import Demos from './Demos/Demos'; 
import Services from './Services/Services'; 
import Gallery from './Gallery/Gallery'; 
import Contact from './Contact/Contact'; 

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
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        expanded={navbarExpanded}
        onToggle={handleNavbarToggle}
      >
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link>
              <Link to="jumbotron" smooth={true} duration={500}>
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
                <Link to="demos" smooth={true} duration={500}>Demos</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="services" smooth={true} duration={500}>Services</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
   
      </Navbar>

      <div className="jumbotron" id="jumbotron">
        
        {/* <img src="../FullBodyShotGimp.png"/> */}
    </div>
{/*     
      <div id="home">
        <Home />
      </div> */}
      <div className="main_block-container">
      <div id="demos">
        <Demos />
      </div>
      <div id="services">
        <Services />
      </div>
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

