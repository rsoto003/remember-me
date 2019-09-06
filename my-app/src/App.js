import React, { Component } from 'react';
import Form from './components/Form';


class App extends Component {
  state = {
    items: []
  }
  submitForm = (e) => {
    e.preventDefault();
    e.persist();
    
    let itemValue = e.target.elements.itemForm.value
    this.setState({
      items: itemValue
    });

    console.log(this.state)
  }
  
  render(){
    return (
      <div className="App">
        <Form submitForm={this.submitForm}/>
      </div>
    );
  }
}

export default App;
