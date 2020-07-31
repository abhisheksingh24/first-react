import React, { Component } from 'react';
import './App.css';
import Box from './Box/Box';

class App extends Component {

  state = {
    value: 0
  }

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
    <div className="App">
      <Box value = {this.state.value} />
      <button onClick = { this.incrementValue }> Add </button>
    </div>
    ); 
  }
}

export default App;
