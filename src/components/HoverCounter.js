import React, {Component} from 'react';
import withCounter from "./withCouter";

class HoverCounter extends Component {
    render() {
        const {count} = this.props
        return (
            <div>
                <div onMouseOver={this.props.counterHandler} >clicked {count} times</div>
            </div>
        );
    }
}

export default withCounter(HoverCounter, 5);