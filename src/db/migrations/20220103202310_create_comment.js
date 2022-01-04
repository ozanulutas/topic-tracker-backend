
exports.up = function(knex) {
  return knex.schema.createTable("comment", table => {
    table.increments("id");
    table.string("text").notNullable();
    table.timestamps(true, true);
    table.integer("topic_id").notNullable().references("id").inTable("topic").onUpdate('CASCADE').onDelete('CASCADE');
    table.integer("user_id").notNullable().references("id").inTable("user").onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("comment");
};
