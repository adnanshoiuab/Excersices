import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import NavBar from './components/navBar';
import particles from './utils/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const renderParticleJsInHomePage = location.pathname === '/';

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={particlesInit}/>
      )}


      {/* navbar */}
      <NavBar/>
      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;