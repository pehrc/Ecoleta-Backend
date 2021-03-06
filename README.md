# Ecoleta-Backend
♻️ Ecoleta é um projeto Open Source desenvolvido na Next Level Week (1.0) da Rocketseat utilizando TypeScript, Node, React e React Native.

Para começar a utilizar a API, é necessário instalar as dependências do Node:

```node
npm install
```

### Instalação

Primeiramente, execute os scripts do Knex para migrates e seeds:

```node
npm run knex:migrate
npm run knex:seed
```

Em seguida, execute o script para iniciar a API:

```node
npm run start
```

Pronto! Agora bastar acessar o endereço ```http://localhost:3333``` para começar a usar.

### Endpoints

O Ecoleta possui duas entidades: ```Items``` e ```Points```. Os Items são os resíduos orgânicos e inorgânicos que podem ser coletados, e estes são cadastrados através do script de seeds do Knex. Os Points são os pontos de coletas que fazem a coleta dos itens. A seguir segue a descrição dos endpoints das entidades para listagem e/ou cadastro de instâncias.

#### Items

O único endpoint de Items é acessado através da rota ```/items``` por uma requisição ```GET```. Esse endpoint é uma rota de listagem de todos os items e não recebe nenhum tipo de parâmetro. Seu retorno é um JSON do tipo:

```json
[
  {
    "id": 1,
    "title": "Lâmpadas",
    "image_url": "http://localhost:3333/uploads/lampadas.svg"
  },
  ...
]
```

#### Points

Existem três endpoints disponíveis para Points.

##### Criação

O endpoint de criação pode ser acessado pela url ```/points``` através de uma requisição ```POST```. No exemplo a seguir é possível visualizar os dados que precisam ser enviados através do body da requisição. Note que em ```items``` são armazenados os IDs dos itens que aquele ponto de coleta recolhe:

```json
{
  "name": "Mercado Pão de Mel",
  "email": "contato@paodemel.com.br",
  "whatsapp": "1122487513",
  "latitude": "-21.56498765",
  "longitude": "25.12548561",
  "city": "São Paulo",
  "uf": "SP",
  "items": [
    1,
    2,
    3
  ]
}
```

Caso a requisição seja realizada com sucesso, um JSON é retornado como a seguir:

```json
{
  "id": 1,
  "name": "Mercado Pão de Mel",
  "email": "contato@paodemel.com.br",
  ...
}
```

##### Listagem única

O endpoint de listagem única é acessado através de uma requisição ```GET``` para a url ```/points/:id```, onde ```:id``` é o id do ponto de coleta que se deseja listar. O retorno é um JSON como exemplificado a seguir:

```json
{
  "point": {
    "id": 1,
    "name": "Mercado Pão de Mel",
    "email": "contato@paodemel.com.br",
    ...
  },
  "items": [
    {
      "title": "Lâmpadas"
    },
    ...
  ]
}
```

Note que o título de todos os itens cadastrados aqui são retornados junto com as informações do ponto de coleta.

##### Listagem múltipla com filtros

A listagem múltipla com filtros pode ser acessada através da url ```/points``` por meio de uma requisição ```GET```. Os filtros devem ser enviados através de query params, e atualmente existem três disponíveis: ```city```, ```uf```, ```items```. Por exemplo, uma requisição com o query param ```items = 1,2,3``` (os IDs dos itens) tem o seguinte retorno:

```json
[
  {
    "id": 1,
    "name": "Mercado Pão de Mel",
    "email": "contato@paodemel.com.br",
    ...
  },
  {
    "id": 2,
    "name": "Mercado Imperatriz",
    "email": "contato@imperatriz.com.br",
    ...
  },
]
```

## Ferramentas

Ferramentas utilizadas para construção do sistema.

- [Node.js](https://nodejs.org) - Ambiente de execução JavaScript server-side.
- [Typescript](https://www.typescriptlang.org/) - Superconjunto tipado do JavaScript.
- [Express](https://expressjs.com/) - Framework para criação de API's do Node.js.
- [SQLite 3](https://www.sqlite.org/) - Biblioteca da linguagem C que implementa um motor pequeno, rápido, independente, de alta confiabilidade e completo para banco de dados SQL.
- [Knex](http://knexjs.org/) - Query builder SQL flexível, portável e divertido de usar para Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, e Amazon Redshift.

## Autores

- **Mikael Messias** - _Desenvolvedor frontend_ - [Github](https://github.com/mikaelmessias)

## Licença

Esse projeto está licenciado sob a licença **GNU v3.0** - veja o arquivo LICENSE.md para mais detalhes.

## Agradecimentos

- [Billie Thompson](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [Rocketseat](https://rocketseat.com.br)
