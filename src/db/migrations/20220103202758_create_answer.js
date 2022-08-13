
exports.up = function (knex) {
  return knex.schema.createTable("answer", table => {
    table.increments("id");
    table.string("text").notNullable();
    table.timestamps(true, true);
    table.integer("topic_id").notNullable().references("id").inTable("topic").onUpdate('CASCADE').onDelete('CASCADE');
    table.integer("answer_id").notNullable().references("id").inTable("answer").onUpdate('CASCADE').onDelete('SET_NULL');
    table.integer("user_id").notNullable().references("id").inTable("user").onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("answer");
};
