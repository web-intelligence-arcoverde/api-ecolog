/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const TABLE_NAME = "auth";

export const up = (knex) => {};
export const down = (knex) => {
  return knex.schema.dropTable(TABLE_NAME);
};
