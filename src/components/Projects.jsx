import React from 'react'
import './projects.css'


const Projects = () => {
  return (
    <div className='project-container'>
        <div className='project-box'>
        <img data-aos="fade-down-right" style={{ "--clr": "#92D500", "--i": 0 }} className="project-img"
          src="../../images/project-1.png"
          alt="awg project" />

        <img data-aos="fade-down-right" style={{ "--clr": "#92D500", "--i": 0 }} className="project-img"
          src="../../images/project-2.png"
          alt="picture" />
        </div>
    </div>
  )
}

export default Projects