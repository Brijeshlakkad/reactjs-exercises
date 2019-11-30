import React, {Component} from 'react';
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "Parent"
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        console.log(`Hello ${this.state.name} from ${childName} `)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        );
    }
}

export default ParentComponent;