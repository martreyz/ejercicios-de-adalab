//Ejercicio 6
import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ada",
      lastName: "Lovelace",
      birthDate: {
        day: 10,
        month: "diciembre",
        year: 1815,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    if (inputName.includes("Name")) {
      this.setState({
        [inputName]: inputValue,
      });
    } else {
      this.setState((prevState) => {
        return {
          birthDate: {
            ...prevState.birthDate,
            [inputName]: inputValue,
          },
        };
      });
    }
    console.log(this.state);
  }
  render() {
    return (
      <>
        <form>
          <input onChange={this.handleChange} type="text" name="firstName" />
          <input onChange={this.handleChange} type="text" name="lastName" />
          <input onChange={this.handleChange} type="number" name="day" />
          <input onChange={this.handleChange} type="text" name="month" />
          <input onChange={this.handleChange} type="number" name="year" />
        </form>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.birthDate.day}</p>
        <p>{this.state.birthDate.month}</p>
        <p>{this.state.birthDate.year}</p>
      </>
    );
  }
}

export default UserInfo;
