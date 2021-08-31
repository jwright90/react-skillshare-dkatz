import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.jsx';

// Extend App class to inherit Component methods
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'Dec 25, 2021',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline })
    // Never mutate state! Always use setState method to update state.
  }

  // Use render method inherited from Component
  render() {
    // This is javascript. 
    // You have to return something if you want to use it as a component
    return (
      // 'class' is a reserved keyword used in React, use className
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock />
        <div className="Form">
          <input
            placeholder="New Date"
            onChange={event => this.setState({ newDeadline: event.target.value })}
          /* 
            The target is the input field 
            The value is the text input
          */
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
      // Anonymous functions ensure that the onClick event 
      // won't cause any loops
    )
  }
}

export default App;