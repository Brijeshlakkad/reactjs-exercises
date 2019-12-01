import React, {Component} from 'react';

class ClickCounterTwo extends Component {


    render() {
        const {count} = this.props
        return (
            <div>
                <button onClick={this.props.incrementCount}>Clicked {count} times</button>
            </div>
        );
    }
}

export default ClickCounterTwo;