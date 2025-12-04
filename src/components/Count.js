import React, { Component } from "react";
import Clock from "./Clock";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: "Saturday, September 4, 2021"
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <Clock deadline={this.state.deadline} />
      </React.Fragment>
    );
  }
}
export default Count;