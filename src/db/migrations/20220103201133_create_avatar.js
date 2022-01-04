
exports.up = function(knex) {
  return knex.schema.createTable("avatar", table => {
    table.increments("id");
    table.string("path").notNullable();
    table.timestamps(true, true);
    table.integer("user_id").notNullable().references("id").inTable("user").onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("avatar");
};
