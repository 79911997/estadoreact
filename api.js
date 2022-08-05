const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  server.use(cors());
  next();
});

server.get("/lista", (req, res) => {
  return res.json("lista");
});

server.post("/lista", (req, res) => {
  const { estado } = req.body;

  var populacao;
  var ranking;
  var mensagem;


if (estado == "PA") {
  populacao =  8777124;
  ranking = 1;
  mensagem = "Pará é o 1° estado mais populoso da região: Norte População: " + populacao;

} else if (estado == "AM") { 

    populacao = 4269995;
    ranking = 2;
    mensagem = "Amazonas é o 2° estado mais populoso da região: Norte População: " + populacao;

} else if (estado == "RO") {

    populacao = 1815278;
    ranking = 3;
    mensagem = "Rondônia é o 3° estado mais populoso da região: Norte População: " + populacao;

} else if (estado == "BA") {
    
    populacao = 14985284; 
    ranking = 1;
    mensagem = "Bahia é o 1° estado mais populoso da região: Nordeste População: " + populacao;

}else if (estado == "PE") {
    
    populacao = 9674793; 
    ranking = 2;
    mensagem = "Pernambuco é o 2° estado mais populoso da região: Nordeste População: " + populacao;

} else if (estado == "CE") {
    
  populacao =  9240580; 
  ranking = 2;
  mensagem = "Ceará é o 2° estado mais populoso da região: Nordeste População: " + populacao

} else if (estado == "PR") {

    populacao =  11597484;
    ranking = 1;
    mensagem = "Paraná é o 1° estado mais populoso da região: Sul População: " + populacao;

} else if (estado == "SC") {

  populacao =  7338473
  ranking = 2;
  mensagem = "Santa Catarina é o 2° estado mais populoso da região: Sul População: " + populacao;


} else if (estado == "RS") {

    populacao = 11466630;
    ranking = 3;
    mensagem = "Rio Grande do Sul é o 3° estado mais populoso da região: Sul População: " + populacao;

} else if (estado == "SP") {

  populacao = 46649132;
  ranking = 1;
  mensagem = "São Paulo é o 1° estado mais populoso da região: Sudeste População: " + populacao

}else if (estado == "MG") {

    populacao = 21411923;
    ranking = 2;
    mensagem = "Minas Gerais é o estado 2° estado mais populoso da região: Sudeste População: " + populacao;

} else if (estado == "RJ") {

    populacao = 17463349;
    ranking = 3;
    mensagem = "Rio de Janeiro é o 3° estado mais populoso da região: Sudeste População: " + populacao;

  }

  return res.json({
    populacao,
    mensagem,
    ranking
  });
});
server.listen(2000);