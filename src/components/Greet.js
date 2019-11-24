import React from 'react';

const Greet = (props) => {
    return (
      <div>
        <h1>Welcome, {props.name}</h1>
        <p>{props.age}</p>
        <p>{props.children}</p>
      </div>
    )
}

// export const Hello.. would be export named component

export default Greet;
// this is export default component
