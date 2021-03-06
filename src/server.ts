import express from 'express'
//express e uma micro framework para lidar com rotas. 
// npm i ts-node -D para o node entender o TypeScript.

//GET : Buscar uma ou mais informações do back-end
//POST : Criar uma nova informação do back-end
//PUT : Atualizar uma informação existente no back-end
//DELETE : Remover uma informação do back-end

const app = express();

// .get recebe dois parâmetros. o PRIMEIRO é qual rota e o SEGUNDO é qual função será executada quando o usuário acessar a rota.
app.get('/user', (request, response) => {
    console.log('listagem de usuarios')
    // JSON
    response.json([ 'Pedro', 'Maria', 'Roberto']); //retornar um Object {} quando for uma informação unica e Array [] quando for várias informações.
})
// A função a ser executada recebe mais dois parâmetros, request e response. request para obter dados e response para enviar dados. 

app.listen(3333);