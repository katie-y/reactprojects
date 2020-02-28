import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: [],
    number: [],
    currentName: "",
    currentNumber: ""
  }


  recordNameHandler = (e) => {
    this.setState({
      currentName: e.target.value
    })
  }
  addNameHandler = () => {
    this.setState({
      name: [...this.state.name, this.state.currentName],
      currentName:""
    })
  }

  recordNumHandler = (e) => {
    this.setState({
      currentNumber: e.target.value
    })
  }
  addNumHandler = () => {
    this.setState({
      number: [...this.state.number, this.state.currentNumber],
      currentNumber:""
    })
  }

  render() {
    const eachName = this.state.name.map((name, index) => {
      return <li key={index}>{name}</li>
    })
      const eachNum = this.state.number.map((number, index) => {
        return <li key={index}>{number}</li>
      })
      const eachPerson = () => {
      for (let i = 0; i < this.state.name.length; i++){
        return eachName[i] + eachNum[i]
      }
    }
    return (
      <div className="App">
        <h1>Address Book</h1>
        <input placeholder="Name" onChange = {this.recordNameHandler} value = {this.state.currentName} ></input>
        <input placeholder="Number" type="number" onChange = {this.recordNumHandler} value = {this.state.currentNumber}></input>
        <button onClick={this.addNameHandler}>Enter</button>
        <ul>{eachPerson}</ul>
      </div>
    );
  }
}

export default App;
