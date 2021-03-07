import { Knex } from 'knex'

// A função UP serve para nos realizarmos as laterações que precisamos no banco.

export async function up(knex: Knex) {
    // CRIAR TABELA
    // No metodo create table recebe 2 parametros: a tabela que vamos criar e uma função que recebe como parametro a refencia da tabela.
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); 
    });
}

export async function down(knex: Knex) {
    // VOLTAR ATRAZ (DELETAR A TABELA CRIADA)
    return knex.schema.dropTable('points');
}
