import React from "react";
import "../stylesheets/Card.css";

class PersonDetail extends React.Component {
  render() {
    console.log(this.props.data.props.person);
    return (
      <div>
        {this.props.data}
        {this.props.data.props.person.location.city}
      </div>
    );
  }
}

export default PersonDetail;
