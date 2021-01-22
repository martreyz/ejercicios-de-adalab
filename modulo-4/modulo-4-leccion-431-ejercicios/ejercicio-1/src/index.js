"use strict";

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const serverPort = 3000;

const staticServerPathTwo = "./admin";
app.use(express.static(staticServerPathTwo));

const staticServerPath = "./public";
app.use(express.static(staticServerPath));

app.listen(serverPort, () => {
  console.log("Server listening at", `http://localhost:${serverPort}`);
});
