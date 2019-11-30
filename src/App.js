import React from 'react';
import './App.css';
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/*<ParentComponent />*/}
      {/*<NameList/>*/}
      <Form/>
    </div>
  );
}

export default App;
