
exports.up = function(knex) {
  return knex.schema.createTable("file", table => {
    table.increments("id");
    table.string("path").notNullable();
    table.timestamps(true, true);
    table.integer("topic_id").notNullable().references("id").inTable("topic").onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("file");
};
