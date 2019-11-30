import React, {Component} from 'react';

class EventBind extends Component {
    constructor(props, context) {
        super(props, context);
        this.state ={
          message: "Welcome"
        };

        // use this approach 3
        // this.clickHandler = this.clickHandler.bind(this);
    }


    // clickHandler(){
    //     this.setState({
    //         message: "Good Bye!"
    //     })
    //     console.log(this);
    // }

    //option 4 is still an experimental feature
    clickHandler = () => {
            this.setState({
                message: "Good Bye!"
            })
            console.log(this);
        }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/*<button onClick={() => this.clickHandler()}>Click</button>*/}
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default EventBind;