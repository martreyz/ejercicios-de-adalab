import React from "react";
import "../stylesheets/CardList.css";
import Card from "./Card";

let arrayResults = [];

class CardList extends React.Component {
  render() {
    if (!!this.props.data.results && this.props.filter.length > 0) {
      arrayResults = this.props.data.results
        .filter((item) => this.props.filter.includes(item.location.country))
        .map((item, i) => {
          return (
            <Card
              idPerson={i + 1}
              handleLink={this.props.handleLink}
              name={item.name.title + item.name.first + item.name.last}
              city={item.location.country}
              age={item.dob.age}
              image={item.picture.large}
            />
          );
        });
      return arrayResults;
    } else if (!!this.props.data.results && this.props.filter.length === 0) {
      arrayResults = this.props.data.results.map((item, i) => {
        return (
          <Card
            idPerson={i + 1}
            name={item.name.title + item.name.first + item.name.last}
            city={item.location.country}
            handleLink={this.props.handleLink}
            age={item.dob.age}
            image={item.picture.large}
            person={item}
          />
        );
      });
      return arrayResults;
    } else {
      return "Algo fue mal, vuelve a intentarlo en unos minutos";
    }
  }
}

export { arrayResults };
export default CardList;
