import React from "react";
import "../stylesheets/Card.css";
import { Link } from "react-router-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    const index = ev.currentTarget.id;
    this.props.handleLink(index);
  }
  render() {
    return (
      <Link to={"/child/" + this.props.idPerson}>
        <li
          id={this.props.idPerson}
          onClick={this.handleClick}
          className="list__item"
        >
          <h2>{this.props.name}</h2>
          <img
            className="list__item-img"
            src={this.props.image}
            alt={this.props.name}
          />
          <p>Localización: {this.props.city}</p>
          <p>Edad: {this.props.age}</p>
        </li>
      </Link>
    );
  }
}

export default Card;
