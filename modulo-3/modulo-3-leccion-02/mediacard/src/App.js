import logo from "./logo.svg";
import "./App.scss";

function App() {
  const appHeader = (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-name">Alex Guerrero </h1>
      <h2 className="App-date">Lunes 26 de junio de 2017</h2>
    </header>
  );
  const appMain = (
    <main className="App-main">
      <p className="App-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        fringilla massa tellus, quis sodales arcu sagittis in. Cras feugiat
        purus ut est luctus pellentesque. Donec et efficitur sem, at pretium
        augue. Vivamus varius, diam vel facilisis semper, quam purus laoreet
        neque, pulvinar pharetra eros ante id dolor. Donec ac velit consequat
        orci auctor pellentesque. Duis et tellus sollicitudin, accumsan purus
        ac, sollicitudin enim. Aliquam erat volutpat. Vivamus volutpat pretium
        felis ut sagittis. Nunc commodo dictum magna, et convallis orci
        fringilla sed. Cras vestibulum mi non finibus facilisis.
      </p>
      <div className="App-moreInfo">
        <p className="App-more">Leer más...</p>
        <h3 className="App-likes">37 ❤️</h3>
      </div>
    </main>
  );
  const appRoute = (
    <div className="App">
      {" "}
      {appHeader} {appMain}
    </div>
  );

  return appRoute;
}

export default App;
