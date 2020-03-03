const express = require("express");
const main = require("./main");

const app = express();

app.get("*", main);

app.listen(3001, () => {
  console.log("El servidor esta corriendo en http://localhost:3001");
});
