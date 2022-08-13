
exports.up = function(knex) {
  return knex.schema.createTable("topic_group", table => {
    table.increments("id");
    table.timestamps(true, true);
    table.integer("topic_id").notNullable().references("id").inTable("topic").onUpdate('CASCADE').onDelete('CASCADE');
    table.integer("group_id").notNullable().references("id").inTable("group").onUpdate('CASCADE').onDelete('CASCADE');
    // TODO: Check how cascading works 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("topic_group");
};
