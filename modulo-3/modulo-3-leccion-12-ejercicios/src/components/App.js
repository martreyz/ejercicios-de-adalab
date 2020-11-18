// import "../stylesheets/App.css";
// import { Switch, Route, Link } from "react-router-dom";
// import React from "react";
// import Counter from "./Counter";
// import Relax from "./Relax";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <nav>
//           <ul>
//             <Link to="/">
//               <li>Contador</li>
//             </Link>
//             <Link to="/relax">
//               <li>Relax</li>
//             </Link>
//           </ul>
//         </nav>

//         <Switch>
//           <Route exact path="/">
//             <Counter />
//           </Route>
//           <Route path="/relax" component={Relax} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;

//Ejercicio 3
// import "../stylesheets/App.css";
// import { Switch, Route, Link } from "react-router-dom";
// import React from "react";
// import RelaxFunc from "./RelaxFunc";
// import CounterFunc from "./CounterFunc";
// const App = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <Link to="/">
//             <li>Contador</li>
//           </Link>
//           <Link to="/relaxfunc">
//             <li>Relax</li>
//           </Link>
//         </ul>
//       </nav>
//       <Switch>
//         <Route exact path="/" component={CounterFunc} />
//         <Route path="/relaxfunc" component={RelaxFunc} />
//       </Switch>
//     </>
//   );
// };

// export default App;

//Ejercicio 5

// import LocalStorage from "./LocalStorage";
// const App = () => {
//   return <LocalStorage />;
// };

// export default App;

import LocalStorageFunc from "./LocalStorageFunc";
const App = () => {
  return <LocalStorageFunc />;
};

export default App;
