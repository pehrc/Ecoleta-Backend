import { Knex } from 'knex'

// A função UP serve para nos realizarmos as laterações que precisamos no banco.

export async function up(knex: Knex) {
    // CRIAR TABELA
    // No metodo create table recebe 2 parametros: a tabela que vamos criar e uma função que recebe como parametro a refencia da tabela.
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    // VOLTAR ATRAZ (DELETAR A TABELA CRIADA)
    return knex.schema.dropTable('items');
}
