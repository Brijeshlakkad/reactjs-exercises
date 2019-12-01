import React from 'react';
import './App.css';
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import Form from "./components/Form";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
    return (
        <div className="App">
            {/*<ParentComponent />*/}
            {/*<NameList/>*/}
            {/*<Form/>*/}
            {/*<RefsDemo/>*/}
            {/*<FocusInput/>*/}
            {/*<FRParentInput />*/}
            {/*<PortalDemo/>*/}
            <ErrorBoundary>
                <Hero heroName='Superman'/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName='Batman'/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName='Joker'/>
            </ErrorBoundary>
        </div>
    );
}

export default App;
