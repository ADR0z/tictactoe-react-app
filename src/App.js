import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDeadline: '',
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }
  render() {
    return (
      //<div><div/>
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>

        <Clock />

        <div>
          <input
            type="text"
            placeholder="Enter a Date"
            onChange={event =>
              this.setState({ newDeadline: event.target.value })
            }
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
