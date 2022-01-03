
exports.up = function(knex) {
  return knex.schema.createTable("topic", table => {
    table.increments("id");
    table.string("title").notNullable();
    table.string("description");
    table.text("content").notNullable();
    table.specificType("order", "smallint");
    table.string("icon");
    table.timestamps(true, true);
    table.integer("status_id").references("id").inTable("status");
    table.integer("user_id").references("id").inTable("user");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("topic");
};
