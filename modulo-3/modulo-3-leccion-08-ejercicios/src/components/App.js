import "../stylesheets/App.css";
import Form from "./Form";
import Preview from "./Preview";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
      age: "",
      genre: "",
      file: "",
      fileName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(name, value) {
    this.setState({
      file: value,
      fileName: name,
    });
  }
  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          handleFileChange={this.handleFileChange}
        />
        <Preview
          name={this.state.name}
          description={this.state.description}
          language={this.state.language}
          age={this.state.age}
          genre={this.state.genre}
          file={this.state.file}
        />
      </div>
    );
  }
}

export default App;
