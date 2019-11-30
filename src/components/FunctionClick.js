import React from 'react';

function FunctionClick() {
    function handleClick(){
        console.log("Function button clicked")
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default FunctionClick;