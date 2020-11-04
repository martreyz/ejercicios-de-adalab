import React from "react";
// import HalfPage from "./HalfPage";
import ItemList from "./ItemList";

//Ejercicio 2:
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <HalfPage>
//           <h1>Hola amigos!</h1>
//         </HalfPage>
//         <HalfPage>
//           <h1>Holi holi!</h1>
//         </HalfPage>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemList />
      </div>
    );
  }
}

export default App;
