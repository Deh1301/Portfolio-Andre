const express = require("express");
const rotas = express.Router();

rotas.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

rotas.get("/cronometro",(req,res)=>{
  res.redirect("https://lista-de-tarefas-three-xi.vercel.app/")
})

module.exports = rotas;