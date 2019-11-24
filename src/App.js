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
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
