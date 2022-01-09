
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('permission').del()
    .then(function () {
      // Inserts seed entries
      return knex('permission').insert([
        { id: 1, name: 'read' },
        { id: 2, name: 'insert' },
        { id: 3, name: 'update' },
        { id: 4, name: 'delete' },
      ]);
    });
};
