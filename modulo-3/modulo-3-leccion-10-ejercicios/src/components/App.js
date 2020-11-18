import "../stylesheets/App.css";
import CardList from "./CardList";
import Filter from "./Filter";
// import { peopleFetch } from "../services/PeopleService";
import React from "react";
import peopleFetch from "../services/PeopleService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      filter: [],
    };
    this.fetchApiPeople = this.fetchApiPeople.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.fetchApiPeople();
  }

  handleFilterChange(a) {
    this.setState({
      filter: a,
    });
  }
  fetchApiPeople() {
    // fetch("https://randomuser.me/api/?results=50")
    //   .then((response) => response.json())
    peopleFetch().then((dataInfo) => {
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
