import React from 'react';
import './App.css';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            {/*<ClickCounterTwo />*/}
            {/*<HoverCounterTwo />*/}
            <Counter render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}/>
            <Counter render={(count, incrementCount) =>(<HoverCounterTwo count={count} incrementCount={incrementCount} />)} />
        </div>
    );
}

export default App;
