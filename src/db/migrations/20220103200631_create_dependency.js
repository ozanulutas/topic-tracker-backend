
exports.up = function(knex) {
  return knex.schema.createTable("dependency", table => {
    table.increments("id");
    table.timestamps(true, true);
    table.integer("dependent").notNullable().references("id").inTable("topic").onUpdate('CASCADE').onDelete('CASCADE');
    table.integer("dependency").notNullable().references("id").inTable("topic").onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("dependency");
};
