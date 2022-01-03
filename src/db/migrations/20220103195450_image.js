
exports.up = function(knex) {
  return knex.schema.createTable("image", table => {
    table.increments("id");
    table.string("path").notNullable();
    table.timestamps(true, true);
    table.integer("topic_id").references("id").inTable("topic");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("image");
};
