import React, {Component} from 'react';
import FRInput from "./FRInput";

class FRParentInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.componentRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.componentRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref={this.componentRef}/>
                <button onClick={this.clickHandler} >Focus</button>
            </div>
        );
    }
}

export default FRParentInput;