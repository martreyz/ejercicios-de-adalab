import React from "react";

class ExerciseOneInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(ev) {
    let divisor;
    if (ev.target.checked === true) {
      divisor = 2;
    } else {
      divisor = 1;
    }
    this.props.handleCheckboxChange(divisor);
  }
  handleChange(ev) {
    const inputValue = ev.target.value;
    this.props.handleInputChange(inputValue);
  }
  render() {
    return (
      <>
        <input type="number" name="number" onChange={this.handleChange} />
        <label htmlFor="even">Mostrar solo los pares</label>
        <input
          type="checkbox"
          name="even"
          onChange={this.handleCheckboxChange}
          id="even"
        />
      </>
    );
  }
}

export default ExerciseOneInput;
