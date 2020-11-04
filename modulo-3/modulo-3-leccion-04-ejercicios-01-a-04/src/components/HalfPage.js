import React from "react";
import "../stylesheets/App.css";

class HalfPage extends React.Component {
  render() {
    return <div className="HalfPage">{this.props.children}</div>;
  }
}

export default HalfPage;
