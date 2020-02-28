import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    number: 0
  }
  increaseNum = () => {
    this.setState({
      number: (this.state.number +1)
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.increaseNum}>{this.state.number}</button>
      </div>
    );
  }
}

export default App;
