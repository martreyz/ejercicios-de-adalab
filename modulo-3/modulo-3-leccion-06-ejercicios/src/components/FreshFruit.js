//Ejercicio 7:
import React from "react";

class FreshFruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularFruits: ["kiwi", "pinneaple", "strawberry"],
      newFruit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
  }

  handleChange(ev) {
    const inputValue = ev.target.value;
    this.setState({
      newFruit: inputValue,
    });
  }

  handleClick(ev) {
    this.setState((prevState) => {
      return {
        popularFruits: [...prevState.popularFruits, prevState.newFruit],
        newFruit: "",
      };
    });
  }

  handleClickTwo(ev) {
    const fruitValue = ev.target.value;
    const newFruitArray = this.state.popularFruits.filter(
      (fruit) => fruit !== fruitValue
    );
    console.log(newFruitArray);
    this.setState({
      popularFruits: [...newFruitArray],
    });
    console.log(this.state.popularFruits);
  }

  render() {
    return (
      <>
        <input
          className="input"
          onChange={this.handleChange}
          type="text"
          name="input"
          value={this.state.newFruit}
        />
        <button onClick={this.handleClick}>Añadir</button>
        <ul>
          {this.state.popularFruits.map((item) => (
            <>
              <li>{item}</li>
              <button onClick={this.handleClickTwo} value={item}>
                Eliminar fruta
              </button>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default FreshFruit;
