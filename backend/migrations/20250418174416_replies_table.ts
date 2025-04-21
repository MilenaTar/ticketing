import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('replies', table => {
    table.increments('id').primary();
    table.text('message');
    table
      .integer('ticketId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tickets')
      .onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('replies');
}
