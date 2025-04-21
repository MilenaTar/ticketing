import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tickets', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.enu('status', ['Open', 'Closed']).notNullable().defaultTo('Open');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('tickets');
}
