const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);
routes.get("/profile", ProfileController.index);
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);
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
