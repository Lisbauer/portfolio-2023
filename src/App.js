import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'
import SetUp from './components/SetUp';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <div className='bg' id="home">
     <Navbar/>
     <Home />
     </div>
     <div id="aboutme">
    <AboutMe/>
     </div>
     <div id="skills">
    <Skills/>
     </div>
     <div id="projects">
     <Projects/>
     </div>
     <div id="setup">
     <SetUp/>
     </div>    
     <Certificate/>
     <div id="contact">
     <Contact/>
     </div>

   
    </div>
  );
}

export default App;
