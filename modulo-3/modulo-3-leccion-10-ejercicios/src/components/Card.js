import React from "react";
import "../stylesheets/Card.css";

class Card extends React.Component {
  render() {
    return (
      <li className="list__item">
        <h2>{this.props.name}</h2>
        <img
          className="list__item-img"
          src={this.props.image}
          alt={this.props.name}
        />
        <p>Localización: {this.props.city}</p>
        <p>Edad: {this.props.age}</p>
      </li>
    );
  }
}

export default Card;
