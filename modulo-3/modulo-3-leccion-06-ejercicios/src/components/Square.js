//Ejercicio 2
import React from "react";
import "../stylesheets/App.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "blue",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    let newClass;
    this.setState((prevState, props) => {
      if (prevState.class === "blue") {
        newClass = "red";
      } else if (prevState.class === "red") {
        newClass = "blue";
      }
      return { class: newClass };
    });
  }
  render() {
    return <div onClick={this.handleClick} className={this.state.class}></div>;
  }
}

export default Square;
