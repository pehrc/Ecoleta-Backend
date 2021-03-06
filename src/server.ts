import express from 'express'
//express e uma micro framework para lidar com rotas. 
// npm i ts-node -D para o node entender o TypeScript.

const app = express();

// .get recebe dois parâmetros. o PRIMEIRO é qual rota e o SEGUNDO é qual função será executada quando o usuário acessar a rota.
app.get('/user', (request, response) => {
    console.log('listagem de usuarios')
    response.json([ 'Pedro', 'Maria', 'Roberto']); //retornar um Object {} quando for uma informação unica e Array [] quando for várias informações.
})
// A função a ser executada recebe mais dois parâmetros, request e response. request para obter dados e response para enviar dados. 

app.listen(3333);