import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Navigation />

      <Main />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
