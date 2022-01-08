
exports.up = function(knex) {
  return knex.schema.createTable("role_permission", table => {
    table.increments("id");
    table.timestamps(true, true);
    table.integer("role_id").notNullable().references("id").inTable("role").onUpdate('CASCADE').onDelete('CASCADE');
    table.integer("permission_id").notNullable().references("id").inTable("permission").onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("role_permission");
};
