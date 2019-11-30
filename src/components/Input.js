import React, {Component} from 'react';

class Input extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={

        };
        this.inputRef  = new React.createRef();
    }

    focusInput() {
        this.inputRef.current.focus();
        console.log(this.inputRef)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
            </div>
        );
    }
}

export default Input;