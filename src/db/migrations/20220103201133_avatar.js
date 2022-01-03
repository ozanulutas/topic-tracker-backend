
exports.up = function(knex) {
  return knex.schema.createTable("avatar", table => {
    table.increments("id");
    table.string("path").notNullable();
    table.timestamps(true, true);
    table.integer("user_id").references("id").inTable("user");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("avatar");
};
