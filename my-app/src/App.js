import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  state = {
    items: ''
  }
  submitForm = (e) => {
    e.preventDefault();
    e.persist();
    this.setState({
      items: e.target.elements.itemForm.value
    })
  

    console.log(this.state);
    e.target.elements.itemForm.value =''
  }
  
  render(){
    return (
      <div className="App">
        <Form submitForm={this.submitForm }/>
      </div>
    );
  }
}

export default App;
