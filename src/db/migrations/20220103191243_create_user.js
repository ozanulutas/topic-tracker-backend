
exports.up = function(knex) {
  return knex.schema.createTable("user", table => {
    table.increments("id");
    table.string("email").notNullable().unique();
    table.string("name");
    table.string("password").notNullable();
    table.timestamps(true, true);
    table.integer("role_id").references("id").inTable("role").onUpdate('CASCADE').onDelete('SET_NULL');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
