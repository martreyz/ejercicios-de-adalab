import "../App.css";
import TextInput from "./TextInput";
import MIMIMItranslator from "./MIMIMItranslator";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const written = ev.target.value;
    console.log(written);
    this.newString = written.replace(/[aeiou]/g, "i");
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <TextInput toDo={this.handleChange} />
        <MIMIMItranslator toWrite={this.newString} />
      </div>
    );
  }
}

export default App;
