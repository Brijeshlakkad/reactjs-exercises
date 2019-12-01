import React, {useState} from 'react';

function HookCounterFour (){
    const [items, setList] = useState([])
    function addItem(){
        setList([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    return (
        <div>
            <button onClick={addItem}>Add an item</button>
            <ul>
                {
                    items.map(ele => <li key={ele.id}>{ele.value}</li>)
                }
            </ul>

        </div>
    );
}

export default HookCounterFour;