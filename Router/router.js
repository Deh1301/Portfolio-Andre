const express = require("express");
const rotas = express.Router();

rotas.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = rotas;