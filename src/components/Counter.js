import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    },
      () => {
        console.log("Callback value: ", this.state.count)
      }
    );
    console.log(this.state.count);  // This is because call to setState is asynchronous
  }
  render () {
    return (
      <div>
        <h1>Count - {this.state.count} </h1>
        <button onClick={()=> this.increment()}>Click</button>
      </div>
    )
  }
}

export default Counter;
