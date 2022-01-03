
exports.up = function(knex) {
  return knex.schema.createTable("group", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description");
    table.specificType("order", "smallint");
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("group");
};
