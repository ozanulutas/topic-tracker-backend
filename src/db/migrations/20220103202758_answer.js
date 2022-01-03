
exports.up = function(knex) {
  return knex.schema.createTable("answer", table => {
    table.increments("id");
    table.string("text").notNullable();
    table.integer("topic_id").references("id").inTable("topic");
    table.integer("answer_id").references("id").inTable("answer");
    table.integer("user_id").references("id").inTable("user");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("answer");
};
