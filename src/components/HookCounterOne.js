import React, {useState, useEffect} from 'react';

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    function clickHandler() {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(()=>{
        console.log('useEffect - updating component')
        document.title = `You clicked ${count} times`
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={clickHandler}>Clicked {count} times</button>
        </div>
    );
}

export default HookCounterOne;