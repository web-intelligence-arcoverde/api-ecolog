/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const TABLE_NAME = "users";

export const up = (knex) => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.string("cpf").unique().notNullable();
    table.string("name").unique().notNullable();
    table.string("phone").unique().notNullable();
    table.string("email").unique();
    table.integer("address_id").unsigned().references("id").inTable("address");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};
export const down = (knex) => {
  return knex.schema.dropTable(TABLE_NAME);
};
