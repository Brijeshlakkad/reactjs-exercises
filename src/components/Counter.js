import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      }
    }
    increment() {
      // this.setState({
      //   count: this.state.count + 1
      // },
      //   () => {
      //     console.log("Callback value: ", this.state.count)
      //   }
      // );
      this.setState(prevState => ({
        count: prevState.count + 1
        }), () => {
              console.log("Callback value: ", this.state.count)
            }
        );
        console.log(this.state.count); // This is because call to setState is asynchronous
      }

      incrementFive() {
        //This is because react groups multiple setState call to one call
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
      }
      render() {
        return ( <
          div >
          <
          h1 > Count - {
            this.state.count
          } < /h1> <
          button onClick = {
            () => this.incrementFive()
          } > Click < /button> <
          /div>
        )
      }
    }

    export default Counter;
