import React from "react";

class Categorybutton extends React.Component {
  render() {
    return <button onClick={this.props.toDo}>{this.props.category}</button>;
  }
}

export default Categorybutton;
