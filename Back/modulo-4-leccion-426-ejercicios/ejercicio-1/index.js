"use strict";

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const serverPort = 3000;

app.listen(serverPort, () => {
  console.log("Server listening at", `http://localhost:${serverPort}`);
});

app.get("/response-a", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/response-b", (req, res) => {
  const htmlCode =
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body> <h1>Esta es una página de prueba</h1></body></html>';
  res.send(htmlCode);
});

app.get("/response-c", (req, res) => {
  const random = Math.round(Math.random() * 11);
  console.log(random);
  if (random % 2 === 0) {
    res.redirect("https://youtube.com");
  } else {
    res.redirect("https://instagram.com");
  }
});

app.get("/response-d", (req, res) => {
  const qParams = {
    user: req.query.user,
  };
  if (qParams.user === "1" || qParams.user === "2") {
    res.status(200).json({
      result: "ok",
    });
  } else {
    res.status(404).json({
      result: "error: invalid query param",
    });
  }
});
