import React, {Component} from 'react';

class Hero extends Component {
    constructor(props, context) {
        super(props, context);
        if(this.props.heroName == "Joker"){
            throw new Error('Not a hero!')
        }
    }

    render() {
        return (
            <div>
                {this.props.heroName}
            </div>
        );
    }
}

export default Hero;