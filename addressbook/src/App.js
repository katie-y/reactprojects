import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        person: [
            {name: "aaa", number: 123 },
            {name: "bbb", number: 456}
        ],

        currentPerson: { name: "", number: null }

    }


    recordNumHandler = (e) => {
         this.setState({
             currentPerson: {number: e.target.value}

         })

    }

    recordNameHandler = (e) => {
        console.log(this.state.currentPerson.name)
        console.log(this.state.currentPerson.number)
        console.log(this.state.currentPerson)
         this.setState({
             currentPerson: { name: e.target.value, number: this.state.currentPerson.number}
         })

    }
    

    addPersonHandler = () => {
        this.setState({
            person: [...this.state.person, this.state.currentPerson],
            currentPerson:
                { name: "", number: null }
        })
    }
    render() {
        const eachPersonName = this.state.person.map((person, index) => {
            return <li key={index}>{person.name}</li>
        })
        const eachPersonNum = this.state.person.map((person, index) => {
            return <li key={index}>{person.number}</li>
        })
        return (
            <div className="App">
                <h1>Address Book</h1>
                <input placeholder="Name" value={this.state.currentPerson.name} onChange={this.recordNameHandler} ></input>
                <input placeholder="Number" type="number" value={this.state.currentPerson.number} onChange={this.recordNumHandler} ></input>
                <button onClick={this.addPersonHandler}>Enter</button>
                <ul>{eachPersonName}</ul>
                <ul>{eachPersonNum}</ul>
            </div>
        );
    }
}

export default App;
