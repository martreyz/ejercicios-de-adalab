import React from "react";

class TextInput extends React.Component {
  render() {
    return <textarea onChange={this.props.toDo}></textarea>;
  }
}

export default TextInput;
