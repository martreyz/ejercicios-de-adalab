import React from "react";
import "../App.css";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.isHating = false;
  }

  changeHandler(ev) {
    const form = document.querySelector(".form");
    if (ev.target.value.includes("cebolla")) {
      this.isHating = true;
      form.classList.add("red");
      this.forceUpdate();
    } else {
      this.isHating = false;
      form.classList.remove("red");
      this.forceUpdate();
    }
  }
  render() {
    return (
      <form className="form">
        <input
          onChange={this.changeHandler}
          type="text"
          name="input"
          placeholder="Write here"
          className="textarea"
        ></input>
      </form>
    );
  }
}

export default OnionHater;
