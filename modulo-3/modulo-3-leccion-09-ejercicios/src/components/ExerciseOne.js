import React from "react";

const numbers = [1, 4, 6, 8, 45, 89];
class ExerciseOne extends React.Component {
  render() {
    return numbers
      .filter(
        (item) => item > this.props.number && item % this.props.even === 0
      )
      .map((item) => {
        return <li>{item}</li>;
      });
  }
}

export default ExerciseOne;
