import React, {Component} from 'react';

class Form extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            name: '',
            comment: '',
            topic: 'react'
        }
        this.handleFormInput = this.handleFormInput.bind(this)
        // this.formSubmit = this.formSubmit(this)
    }

    handleFormInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    formSubmit = e =>{
        alert(`${JSON.stringify(this.state)}`)
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <label>Name</label>
                        <input type='text' name="name" value={this.state.name} onChange={this.handleFormInput} />
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea type='text' name="comment" value={this.state.comment} onChange={this.handleFormInput} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select type='text' name="topic" value={this.state.topic} onChange={this.handleFormInput} >
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;