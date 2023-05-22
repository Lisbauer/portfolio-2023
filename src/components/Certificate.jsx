import React from 'react'
import './certificate.css'

const Certificate = () => {

  return (
    <div className='certificate-container'>
      <h2 data-aos="fade-down">MY CERTIFICATES</h2>
      <div className='certificate-images'>
     <div className='two-img'>
          <img data-aos="fade-down-right" style={{ "--clr": "#92D500", "--i": 0 }} className="cert-img"
          src="../../images/devweb-cert.png"
          alt="picture" />
      
          <img data-aos="fade-down-left" style={{ "--clr": "#92D500", "--i": 0 }} className="cert-img"
          src="../../images/js-cert.png"
          alt="picture" />
    </div>
    <div className='two-img'>
          <img data-aos="fade-up-right" style={{ "--clr": "#92D500", "--i": 0 }} className="cert-img"
          src="../../images/react-cert.png"
          alt="picture" />
  
          <img data-aos="fade-up-left" style={{ "--clr": "#92D500", "--i": 0 }} className="cert-img"
          src="../../images/frontend-cert.png"
          alt="picture" />
   </div>
      </div>
    

    </div>
  )
}

export default Certificate