import './App.scss';
import React from 'react';
import Concept from './components/Concept';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Story from './components/Story';
import Values from './components/values';

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
