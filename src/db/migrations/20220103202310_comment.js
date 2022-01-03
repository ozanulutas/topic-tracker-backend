
exports.up = function(knex) {
  return knex.schema.createTable("comment", table => {
    table.increments("id");
    table.string("text").notNullable();
    table.integer("topic_id").references("id").inTable("topic");
    table.integer("user_id").references("id").inTable("user");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("comment");
};
