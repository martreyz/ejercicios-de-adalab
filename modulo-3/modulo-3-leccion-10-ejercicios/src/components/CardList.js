import React from "react";
import "../stylesheets/CardList.css";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    console.log(this.props.filter);
    if (!!this.props.data.results && this.props.filter.length > 0) {
      return this.props.data.results
        .filter((item) => this.props.filter.includes(item.location.country))
        .map((item) => {
          return (
            <Card
              name={item.name.title + item.name.first + item.name.last}
              city={item.location.country}
              age={item.dob.age}
              image={item.picture.large}
            />
          );
        });
    } else if (!!this.props.data.results && this.props.filter.length === 0) {
      return this.props.data.results.map((item) => {
        return (
          <Card
            name={item.name.title + item.name.first + item.name.last}
            city={item.location.country}
            age={item.dob.age}
            image={item.picture.large}
          />
        );
      });
    } else {
      return "Algo fue mal, vuelve a intentarlo en unos minutos";
    }
  }
}

export default CardList;
