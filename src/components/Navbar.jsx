import React from 'react'
import './navbar.css'
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
      };

  return (
    <div className='nav-container'>
        <div className='li-container'>
            <ul className="nav-links">
                <li> <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
               HOME
              </Link></li>
                <li><Link
                to="aboutme"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >ABOUT ME</Link></li>
                <li><Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >SKILLS</Link></li>

                <li><Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >PORTFOLIO </Link></li>
                <li>SET UP</li>
                <li>CERTIFICATES</li>
                <li><Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >CONTACT ME</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar