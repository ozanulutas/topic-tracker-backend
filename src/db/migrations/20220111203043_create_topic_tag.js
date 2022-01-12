
exports.up = function(knex) {
  return knex.schema.createTable("topic_tag", table => {
    table.increments("id");
    table.timestamps(true, true);
    table.integer("topic_id").notNullable().references("id").inTable("topic").onUpdate('CASCADE').onDelete('CASCADE');
    table.integer("tag_id").notNullable().references("id").inTable("tag").onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("topic_tag");
};
