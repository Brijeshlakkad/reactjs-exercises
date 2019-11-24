import React, {Component} from 'react'

class Hello extends Component{
  render(){
    return (
      React.createElement('div', null, React.createElement('h1', null, 'Hello'))
    );
  }
}
export default Hello;
