import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(this.interval);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }

  render() {
    return (
      <div className="date">
        <div className="countdown">{this.props.deadline}</div>
        <div className="countdown">
          <span className="countdown-padding">{this.leading0(this.state.days)} days</span>
          <span className="countdown-padding">{this.leading0(this.state.hours)} hours</span>
          <span className="countdown-padding">{this.leading0(this.state.minutes)} minutes</span>
          <span className="countdown-padding">{this.leading0(this.state.seconds)} seconds</span>
        </div>
      </div>
    );
  }
}
export default Clock;
