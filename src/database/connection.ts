import knex from 'knex'
import path from 'path'

// __dirname e um a variável global que ira retornar o diretorio do arquivos em que estamos executando a variálvel ( database )


const connection = knex ({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite')
    },
})

export default connection;