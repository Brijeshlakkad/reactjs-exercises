import React, {Component} from 'react';
import Input from "./Input";

class FocusInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.childRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.childRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.childRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default FocusInput;