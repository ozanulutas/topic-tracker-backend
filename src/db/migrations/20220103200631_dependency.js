
exports.up = function(knex) {
  return knex.schema.createTable("dependency", table => {
    table.increments("id");
    table.timestamps(true, true);
    table.integer("dependent").references("id").inTable("topic");
    table.integer("dependency").references("id").inTable("topic");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("dependency");
};
