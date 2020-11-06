import React from "react";
import CityImage from "./CityImage";

let selected;

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(ev) {
    selected = ev.target.value;
    console.log(selected);
    this.forceUpdate();
  }
  render() {
    return (
      <>
        <select onChange={this.changeHandler}>
          <option value="buenosAires" id="buenosAires">
            Buenos Aires
          </option>
          <option value="sidney" id="sidney">
            Sidney
          </option>
          <option value="praga" id="praga">
            Praga
          </option>
          <option value="boston" id="boston">
            Boston
          </option>
          <option value="tokio" id="tokio">
            Tokio
          </option>
        </select>
        <CityImage selectedImage={selected} />
      </>
    );
  }
}

export default Destiny;
