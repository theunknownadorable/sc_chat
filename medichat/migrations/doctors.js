// migrations/<timestamp>_migration_name.js
exports.up = function (knex) {
  return knex.schema.createTable("doctors", function (table) {
    table.string("email").primary();
    table.string("license").defaultTo("pending");
    table.integer("verified");
    table.string("d_name");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("doctors");
};
