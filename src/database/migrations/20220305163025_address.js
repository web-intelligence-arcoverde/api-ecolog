/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const TABLE_NAME = "address";

export const up = (knex) => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.string("zip_code");
    table.string("city");
    table.string("street");
    table.string("complement");
    table.integer("number");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};
export const down = (knex) => {
  return knex.schema.dropTable(TABLE_NAME);
};
