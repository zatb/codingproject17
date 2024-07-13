// U36432650
import React from 'react';
import TaskGenerator from './TaskGenerator';
import FancyText from './FancyText';
import Footer from './Footer';
import './App.css';

const App = () => (
  <div className="App">
    <FancyText title={true} text="Task Management and Motivation App" isMainTitle={true} />
    <TaskGenerator />
    <Footer />
  </div>
);

export default App;
