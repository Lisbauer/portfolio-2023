import React, { useEffect, useState } from 'react'
import './home.css'

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleMouseEnter = (index) => {
      setActiveIndex(index);
    };
  
    const handleMouseLeave = () => {
      setActiveIndex(-1);
    };
  
    const letters = ['L', 'I', 'S', 'A', ' ', 'B', 'A', 'U', 'E', 'R'];
  return (
    <div>
        <section className='home-section'>
            <div className='frontend-box'>
            <h1 data-aos="fade-right" className='name-text' onMouseLeave={handleMouseLeave}>
            {letters.map((letter, index) => (
              <span
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                className={index <= activeIndex ? 'active' : ''}
              >
                {letter}
              </span>
            ))}
          </h1>
                <h2 className='frontend-text'> <span className='front-span'>FRONTEND</span>  <br/> <span className='dev-span'>DEVELOPER</span></h2>
                
                <div className='container-welcome'>
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E </span>
        <span>T</span>
        <span>O </span>
        <span>M</span>
        <span>Y </span>
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </div>
            </div>
            <div>
            <img className='giffy' src="../images/devgirl2.png" alt="" />
            </div>
        </section>
        
        <div className="bubbles">
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 10 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 21 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 26 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 13 }}></span>
        <span style={{ "--i": 28 }}></span>
      </div>
    </div>
  )
}

export default Home