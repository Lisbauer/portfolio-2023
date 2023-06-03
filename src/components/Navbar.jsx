import React, { useState } from 'react'
import './navbar.css'
import { Link, animateScroll } from "react-scroll";
import './fonts.css'

const Navbar = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
      };

      const [isMenuOpen, setMenuOpen] = useState(false);

      const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
      };
    
      const handleLinkClick = () => {
        setMenuOpen(false);
      };

  return (
    <div className='nav-container'>
      <div className="burger-link-container">
      <button
            className={`burger-btn ${isMenuOpen ? "active" : ""}`}
            onClick={handleMenuClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        <div className={`li-container ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-links" >
                <li> <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >
               HOME
              </Link></li>
                <li><Link
                to="aboutme"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >ABOUT ME</Link></li>

                <li><Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >SKILLS</Link></li>

                <li><Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >PORTFOLIO </Link></li>

                <li><Link
                to="art"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >ART GALLERY</Link></li>

                <li><Link
                to="certificate"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >CERTIFICATES</Link></li>

                <li><Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >CONTACT ME</Link></li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Navbar