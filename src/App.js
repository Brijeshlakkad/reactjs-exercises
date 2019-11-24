import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      { /* <Hello /> */}
      <Greet name="Brijesh" age="21">
        Description: Software Developer
      </Greet>
      <Greet name="XYZ" age="22" />
      <Welcome name="Brijesh" age="22">
        Description: Software Developer
      </Welcome>
      <Welcome name="XYZ" age="21" />
    </div>
  );
}

export default App;
