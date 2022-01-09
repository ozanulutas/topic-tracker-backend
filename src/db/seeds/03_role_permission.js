
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('role_permission').del()
    .then(function () {
      // Inserts seed entries
      return knex('role_permission').insert([
        { id: 1, role_id: 1, permission_id: 1 },
        { id: 2, role_id: 1, permission_id: 2 },
        { id: 3, role_id: 1, permission_id: 3 },
        { id: 4, role_id: 1, permission_id: 4 },
      ]);
    });
};
