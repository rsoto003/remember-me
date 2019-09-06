import React, { Component } from 'react';

class Form extends Component {
    render(props){
        return (
        <form onSubmit={this.props.submitForm}>
            <input type="text" name="itemForm"/>
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default Form;