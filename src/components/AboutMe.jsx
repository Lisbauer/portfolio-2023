import React from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="about-container"></div>
      <div className="text-img-box">
        <div className="h2-pic-cv">
        <h2 className="h2-abt" data-aos="fade-right"> <span>ABOUT</span> ME</h2>
        <div className="pic-cv" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0">
          <img
            className="linkedin-pic"
            src="../../images/linkedin.png"
            alt="picture"
          />
          <a  data-aos="flip-left"
            className="a-neon"
            href=""
            style={{ "--clr": "#ff22bb", "--i": 0 }}
          >
            <span>CV</span>
          </a>
        </div></div>

        <div className="container2"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
          <div className="box2">
            <span></span>
            <div className="content">
              <h2>WHO AM I?</h2>
              <p>
                I am a 27 year old girl living in Buenos Aires, Argentina. I
                have a background in veterinary studies, having worked and
                studied in that field for six years. However, my passion lies in
                frontend development with a keen interest in design. In 2022, I
                started my journey as a developer, focusing on expanding my
                skills in programming and pursuing a career in the tech
                industry.
              </p>
            </div>
          </div>

          <div className="box2">
            <span></span>
            <div className="content">
              <h2>WHAT ARE MY GOALS?</h2>
              <p>
                I aspire to become proficient in the latest technologies and
                frameworks, constantly staying updated with industry trends.
                Ultimately, my goal is to secure challenging projects or
                employment opportunities that allow me to utilize my programming
                and design skills effectively, contributing to innovative and
                user-friendly digital experiences. Currently, I am taking a
                UX/UI design course at Coder house.
              </p>
            </div>
          </div>

          <div className="box2">
            <span></span>
            <div className="content">
              <h2>GET TO KNOW ME A LITTLE MORE!</h2>
              <p>
                In my free time, I love playing Valorant. I've been a gamer
                since I was 15, so I'm very familiar with technology. I have two
                cats who love to lean on my keyboard and erase my code. I'm
                passionate about digital art, I've always wanted a graphics
                tablet. My favorite place in the world is my workspace, as I
                consider it incredibly useful and supportive in nurturing
                inspiration. Lastly, I adore collecting figures from games and
                anime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
