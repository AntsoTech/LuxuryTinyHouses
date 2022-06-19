import './App.scss';
import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Contact from './components/contact';
import Concept from './components/concept';
import Story from './components/story';
import Values from './components/values';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Values />
      <Concept />
      <Story />
      <Contact />
    </div>
  );
}

export default App;
