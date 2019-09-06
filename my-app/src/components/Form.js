import React, { Component } from 'react';

class Form extends Component {
    render(props){
        return (
            <div>
                <form onSubmit={this.props.submitForm}>
                    <input type="text" name="itemForm"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;