import "../stylesheets/App.css";
import CardList from "./CardList";
import Filter from "./Filter";
// import { peopleFetch } from "../services/PeopleService";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      filter: [],
    };
    this.fetchApiPeople = this.fetchApiPeople.bind(this);
    this.fetchApiPeople();
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(a) {
    this.setState({
      filter: a,
    });
  }
  fetchApiPeople() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((dataInfo) => {
        if (!!dataInfo) {
          this.setState({
            data: dataInfo,
          });
        }
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div className="main__app">
        <ul className="list">
          <CardList filter={this.state.filter} data={this.state.data} />
        </ul>
        <Filter handleFilterChange={this.handleFilterChange} />
      </div>
    );
  }
}

export default App;
