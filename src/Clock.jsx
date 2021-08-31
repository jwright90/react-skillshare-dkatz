import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hrs: 0,
      mins: 0,
      secs: 0
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="Clock-days">{this.state.days} Days</div>
          <div className="Clock-hrs">{this.state.hrs} Hours</div>
          <div className="Clock-mins">{this.state.mins} Mins</div>
          <div className="Clock-secs">{this.state.secs} Seconds</div>
        </div>
      </div>
    )
  }
}

export default Clock;