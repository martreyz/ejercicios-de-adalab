"use strict";

//Ejercicio 1:

// const express = require("express");
// const cors = require("cors");

// // create server
// const server = express();

// // set express middleware
// server.use(express.json());
// server.use(cors());

// // init express aplication
// const serverPort = 3000;
// server.listen(serverPort, () => {
//   console.log(`Server listening at http://localhost:${serverPort}`);
// });

// const users = [
//   {
//     userId: "123",
//     orderId: "456",
//   },
// ];

// server.get("/users/:userId/orders/:orderId", (req, res) => {
//   console.log("URL params", req.params);
//   const user = users.find((user) => user.userId === req.params.userId);
//   if (user === undefined) {
//     res.json({ error: "user-not-found" });
//   } else {
//     res.json(user);
//   }
// });

//Ejercicio 2:

const express = require("express");
const cors = require("cors");

const data = require("./data.json");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.get("/users/:userId/", (req, res) => {
  const characters = data.results;
  console.log("URL params", req.params);
  const result = characters.filter(
    (character) => character.id === parseInt(req.params.userId)
  );

  if (result === undefined) {
    res.json({ error: "character-not-found" });
  } else {
    res.json(result);
  }
});

app.get("/users/:userId/episodes", (req, res) => {
  const characters = data.results;
  console.log("URL params", req.params);
  const result = characters.filter(
    (character) => character.id === parseInt(req.params.userId)
  );

  if (result === undefined) {
    res.json({ error: "character-not-found" });
  } else {
    res.json(result[0].episode);
  }
});
