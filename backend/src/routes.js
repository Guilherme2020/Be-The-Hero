const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");
const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Diego Fernandes"
  });
});
routes.post("/ongs", (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;
  const id = crypto.randomBytes(4).toString("HEX");

  return response.json({ name, email, whatsapp, city, uf });
});
module.exports = routes;
/**
  Rota /recurso
**/
/**
  Métodos HTTP:
  *
  GET: Buscar uma inforamção do back-end
  POST: Criar uma Informação no Back-End
  PUT: Alterar uma informação no Back-End
  DELETE: Deletar uma informação no back-end
**/
// Entidades:
//  .ONG
//  .Caso(incident)
//Funcionalidades
// login da ong
// logout da ong
// cadastro de ong
// cadastrar novos casos
// deletar casos
// listar casos especificos de uma ong
// listar todos os casos
// entrar em contato com a ong

/**
 *
 * Tipos de parâmetros
 * Querys params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação )
 */
