import React, {useState} from 'react';

function HookCounter(){
    const [count, setCount] = useState(0)
    // function clickHandler(){
    //
    // }
    return (
        <div>
            <button onClick={()=>{setCount(count + 1)}}>Clicked {count} times</button>
        </div>
    );
}

export default HookCounter;