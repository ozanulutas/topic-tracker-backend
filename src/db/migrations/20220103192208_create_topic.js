
exports.up = function(knex) {
  return knex.schema.createTable("topic", table => {
    table.increments("id");
    table.string("title").notNullable();
    table.string("description");
    table.text("content").notNullable();
    table.specificType("order", "smallint");
    table.string("icon");
    table.timestamps(true, true);
    table.integer("status_id").notNullable().references("id").inTable("status").onUpdate('CASCADE').onDelete('SET_NULL');
    table.integer("user_id").notNullable().references("id").inTable("user").onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("topic");
};
