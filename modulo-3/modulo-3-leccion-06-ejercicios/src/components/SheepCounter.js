//Ejercicio 4:
// import React from "react";

// class SheepCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(ev) {
//     this.setState((prevState, props) => {
//       let sheepCounter = (prevState.counter += 1);
//       return { counter: sheepCounter };
//     });
//   }

//   render() {
//     return (
//       <>
//         <p>{this.state.counter}</p>
//         <button onClick={this.handleClick}></button>
//       </>
//     );
//   }
// }

// export default SheepCounter;

//Ejercicio 5:

import React from "react";
import "../stylesheets/App.css";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  sheepArray = [];
  handleClick(ev) {
    document.querySelector(".container").innerHTML +=
      '<img class="sheep" alt="Sheep" src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"/>';
    this.setState((prevState, props) => {
      let sheepCounter = (prevState.counter += 1);
      return { counter: sheepCounter };
    });
  }

  render() {
    return (
      <>
        <div className="container">{this.sheepArray}</div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}></button>
      </>
    );
  }
}

export default SheepCounter;
