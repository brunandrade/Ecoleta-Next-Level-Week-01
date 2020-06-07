import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.dropTable('points');
}


export async function down(knex: Knex): Promise<any> {
}

