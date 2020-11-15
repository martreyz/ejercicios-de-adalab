import React from "react";
import "../stylesheets/App.css";

class ExerciseTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true,
      idArrow: "",
    };
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }
  handleArrowClick(ev) {
    const idArrow = ev.target.id;
    this.setState({
      isClosed: !this.state.isClosed,
      idArrow: idArrow,
    });
  }

  render() {
    return (
      <li key={this.props.i}>
        <h1>{this.props.name}</h1>
        <button id={this.props.i} onClick={this.handleArrowClick}>
          flecha
        </button>
        {this.state.isClosed ? null : <p>{this.props.from}</p>}
      </li>
    );
  }
}

export default ExerciseTwo;
