//Ejercicio 3
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    const currentDate = new Date();
    const time =
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    this.setState({
      date: time,
    });
  }

  render() {
    return <p>{this.state.date}</p>;
  }
}

export default Clock;
