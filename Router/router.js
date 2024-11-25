const express = require("express");
const rotas = express.Router();

rotas.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

rotas.get("/lista de tarefa",(req,res)=>{
  res.redirect("https://lista-de-tarefas-three-xi.vercel.app/")
})

rotas.get("/studiosweet",(req,res)=>{
  res.redirect("https://studio-sweet.vercel.app/")
})

rotas.get("/cronometro",(req,res)=>{
  res.redirect("https://cronometro-projeto-rust.vercel.app/")
})

module.exports = rotas;