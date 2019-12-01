import React, {useState} from 'react';

function HookCounter() {
    const [count, setCount] = useState(0)

    function clickHandler() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={clickHandler}>Clicked {count} times</button>
        </div>
    );
}

export default HookCounter;