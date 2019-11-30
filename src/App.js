import React from 'react';
import './App.css';
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import Form from "./components/Form";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";

function App() {
  return (
    <div className="App">
      {/*<ParentComponent />*/}
      {/*<NameList/>*/}
      {/*<Form/>*/}
      {/*<RefsDemo/>*/}
      {/*<FocusInput/>*/}
      <FRParentInput />
    </div>
  );
}

export default App;
