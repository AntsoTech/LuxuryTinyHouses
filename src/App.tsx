import './App.scss';
import React from 'react';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
import Concept from './components/Concept.js';
import Story from './components/Story.js';
import Values from './components/values.js';
import Projects from './components/Projects.js';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <Concept />
        <Projects />
        <Values />
        <Story />
        <Contact />
      </div>
  );
}

export default App;
