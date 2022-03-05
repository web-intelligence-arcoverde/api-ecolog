/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const TABLE_NAME = "users";

export const up = (knex) => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id");
    table.string("email").unique().notNullable();
    table.string("password").unique().notNullable();
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};
export const down = (knex) => {
  return knex.schema.dropTable(TABLE_NAME);
};
