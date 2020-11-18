import React from "react";

class LocalStorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const inputValue = ev.currentTarget.value;
    this.setState({ text: inputValue });
  }

  componentDidMount() {
    if (localStorage.getItem("Text")) {
      const inputValue = localStorage.getItem("Text");
      this.setState({ text: inputValue });
    } else {
      this.setState({ text: "Todavía no se ha introducido ningún texto" });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("Text", this.state.text);
  }

  render() {
    return (
      <>
        <input
          placeholder="Introduce un texto"
          onChange={this.handleChange}
          type="text"
          name="userinput"
        />
        <p>{this.state.text}</p>
      </>
    );
  }
}

export default LocalStorage;
