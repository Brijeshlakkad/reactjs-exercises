import React, {Component} from 'react';

class RefsDemo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={

        };
        this.inputRef  = new React.createRef();
        this.clickHandler = this.clickHandler.bind(this);

        this.cbRef = null;
        this.setCbRef = element =>{
            this.cbRef = element;
        }
    }

    componentDidMount() {
        this.cbRef.focus();

        // this.inputRef.current.focus();
        // console.log(this.inputRef)
    }

    clickHandler(){
        // alert(`${this.inputRef.current.value}`)
        alert(`${this.cbRef.value}`);
    }

    render() {
        return (
            <div>
                {/*<input type='text' ref={this.inputRef}/>*/}
                <input type='text' ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;