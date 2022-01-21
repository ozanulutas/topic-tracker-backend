const db = require("../db/db.js");


// Registers a user
const register = async (user) => {

  const result = db("user").insert(user).returning(["id"]);

  return result;
}

const getByEmail = async (email) => {

  const result = db("user")
    .leftJoin("role", "role.id", "user.role_id")
    .select(
      "user.id as id",
      "user.name as name",
      "password",
      "email",
      "role.name as role",
      "role.id as role_id"
    )
    .where({ email });

  return result;
}

const getById = async (id) => {

  const result = db("user")
    .leftJoin("role", "role.id", "user.role_id")
    .select(
      "user.id as id",
      "user.name as name",
      "password",
      "email",
      "role.name as role",
      "role.id as role_id"
    )
    .where({ "user.id": id });

  return result;
}

const getAll = async (page) => {

  let result = db("user")
    .leftJoin("role", "role.id", "user.role_id")
    .select(
      "user.id as id",
      "user.name as name",
      "email",
      "role.name as role",
      "role.id as role_id"
    );

  if (page) {
    result = result.paginate({ perPage: 3, currentPage: page, isLengthAware: true });
  }

  return result;
}

const remove = async (id) => {

  const result = db("user")
    .where({ id })
    .del()
    .returning(["id"]);

  return result;
}

const update = async (user) => {
  
  const result = db("user")
    .where("id", user.id)
    .update({
      name: user.name,
      email: user.email,
      role_id: user.role_id,
    })
    .returning(["id"]);

  return result;
}


module.exports = {
  register,
  getByEmail,
  getById,
  getAll,
  remove,
  update
}