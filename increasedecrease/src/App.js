import React, {Component} from 'react';
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
  decreaseNum = () => {
    this.setState({
      number: (this.state.number -1)
    })
  }
  render() {
    return (
      <div className="App">
      <h1>{this.state.number}</h1>
        <button onClick={this.increaseNum}>Increase</button>
        <button onClick={this.decreaseNum}>Decrease</button>
      </div>
    );
  }
}

export default App;
