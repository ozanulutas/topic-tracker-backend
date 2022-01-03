
exports.up = function(knex) {
  return knex.schema.createTable("topic_group", table => {
    table.increments("id");
    table.timestamps(true, true);
    table.integer("topic_id").references("id").inTable("topic");
    table.integer("group_id").references("id").inTable("group");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("topic_group");
};
