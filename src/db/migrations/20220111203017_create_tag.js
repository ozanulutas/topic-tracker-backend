
exports.up = function(knex) {
  return knex.schema.createTable("tag", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description");
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("tag");
};
