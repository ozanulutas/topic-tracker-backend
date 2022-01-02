
exports.up = function(knex) {
  return knex.schema.createTable("test", table => {
    table.increments("id");
    table.string("email").notNullable().unique();
    table.string("first_name").notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("test");
};
