
exports.up = function(knex) {
  return knex.schema.createTable("status", table => {
    table.increments("id");
    table.string("title").notNullable();
    table.string("description");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("status");
};
