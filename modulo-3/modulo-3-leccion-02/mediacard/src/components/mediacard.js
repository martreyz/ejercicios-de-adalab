import React from "react";

const Mediacard = (props) => {
  return (
    <main>
      <section className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        <h1 className="App-name">{props.name} </h1>
        <h2 className="App-date">{props.date}</h2>
      </section>
      <section className="App-main">
        <p className="App-text">{props.text}</p>
        <div className="App-moreInfo">
          <p className="App-more">Leer más...</p>
          <div>
            <h3 className="App-likes">{props.number}</h3>
            <img src={props.heart} className="App-heart" alt="Likes" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mediacard;
