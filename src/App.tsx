import './App.scss';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Concept from './components/Concept';
import Story from './components/Story';
import Values from './components/values';
import Projects from './components/Projects';

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
