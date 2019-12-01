import React, {Component} from 'react';
import withCounter from "./withCouter";

class ClickCounter extends Component {

    render() {
        const {count} = this.props
        return (
            <div>
                <button onClick={this.props.counterHandler} >clicked {count} times</button>
            </div>
        );
    }
}

export default withCounter(ClickCounter, 1);