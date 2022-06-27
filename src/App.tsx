import './App.scss';
import React from 'react';
import Concept from './components/Concept';
import Header from './components/Header';
import Projects from './components/Projects';
import Story from './components/Story';
import Values from './components/values';

function App() {
  return (
    <div className="App">
      <Header />
      <Concept />
      <Projects />
      <Values />
      <Story />
    </div>
  );
}

export default App;
