
exports.up = function(knex) {
  return knex.schema.createTable("user", table => {
    table.increments("id");
    table.string("email").notNullable().unique();
    table.string("name");
    table.string("password").notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
