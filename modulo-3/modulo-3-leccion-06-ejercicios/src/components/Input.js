//Ejercicio 1

import React from "react";
import Parragraph from "./Parragraph";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    const currentText = ev.target.value;
    console.log(currentText);
    this.setState({
      message: currentText,
    });
  }
  render() {
    return (
      <>
        <input onChange={this.handleChange} type="text"></input>
        <Parragraph info={this.state.message} />
      </>
    );
  }
}

export default Input;
