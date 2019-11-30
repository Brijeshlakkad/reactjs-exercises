import React from 'react';
import './App.css';
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      {/*<ParentComponent />*/}
      <NameList/>
    </div>
  );
}

export default App;
