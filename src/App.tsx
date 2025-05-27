import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CloudEffect from './components/CloudEffect';

function App() {
  useEffect(() => {
    document.title = 'Zineb Dkier | Portfolio';
  }, []);

  return (
    <div className="w-full min-h-screen font-sans overflow-x-hidden relative">
      <CloudEffect />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <div id="footer-trigger" className="h-10 w-full" />
      <Footer />
    </div>
  );
}

export default App;
