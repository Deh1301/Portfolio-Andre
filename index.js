const express = require("express");
const path = require("path"); 
const serv = express();
const port = process.env.PORT || 3000;

const router = require("./Router/router");


serv.use(express.static(path.join(__dirname, "public")));


serv.use("/", router);

serv.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});