import "../stylesheets/App.css";
import { Route, Switch, withRouter } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Pricing from "./Pricing";
import CardList from "./CardList";
import Filter from "./Filter";
import PersonDetail from "./PersonDetail";
import React from "react";
import { arrayResults } from "./CardList";

//Ejercicio 1:
// function App() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/"> Home</Link>
//         </li>
//         <li>
//           <Link to="/about"> About</Link>
//         </li>
//         <li>
//           <Link to="/pricing"> Pricing</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/pricing" component={Pricing} />
//       </Switch>
//     </div>
//   );
// }

//Ejercicio 2

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      filter: [],
      person: "",
    };
    this.fetchApiPeople = this.fetchApiPeople.bind(this);
    this.fetchApiPeople();
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleLink = this.handleLink.bind(this);
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

  handleLink(a) {
    const person = arrayResults[a - 1];
    this.setState({
      person: person,
    });
  }

  render() {
    return (
      <div className="main__app">
        <ul className="list">
          <CardList
            handleLink={this.handleLink}
            filter={this.state.filter}
            data={this.state.data}
          />
        </ul>
        <Filter handleFilterChange={this.handleFilterChange} />
        <Switch>
          <Route
            path="/child/:id"
            render={(routerProps) => (
              <PersonDetail
                match={routerProps.match}
                data={this.state.person}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
