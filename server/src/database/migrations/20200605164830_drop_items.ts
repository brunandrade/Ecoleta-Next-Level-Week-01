import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.dropTable('items');
}


export async function down(knex: Knex): Promise<any> {
}

