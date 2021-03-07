"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
//express e uma micro framework para lidar com rotas. 
// npm i ts-node -D para o node entender o TypeScript.
//GET : Buscar uma ou mais informações do back-end
//POST : Criar uma nova informação do back-end
//PUT : Atualizar uma informação existente no back-end
//DELETE : Remover uma informação do back-end
var app = express_1.default();
// .get recebe dois parâmetros. o PRIMEIRO é qual rota e o SEGUNDO é qual função será executada quando o usuário acessar a rota.
// app.get('/users', (request, response) => {
//     console.log('listagem de usuarios')
//     // JSON
//     response.json([ 'Pedro', 'Maria', 'Roberto']); //retornar um Object {} quando for uma informação unica e Array [] quando for várias informações.
// })
// A função a ser executada recebe mais dois parâmetros, request e response. request para obter dados e response para enviar dados. 
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3333);
