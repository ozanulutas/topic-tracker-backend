const db = require("../db/db.js");


// Registers a user
const register = async (user) => {

  const { name, password, email, role_id } = user;

  const [result] = await db("user").insert({ name, password, email, role_id }).returning(["id"]);

  return result;
}

const getByEmail = async (email) => {

  const [result] = await db("user")
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

const getAll = async (page) => {

  let result = db("user")
    .leftJoin("role", "role.id", "user.role_id")
    .select(
      "user.id as id",
      "user.name as name",
      "email",
      "role.name as role",
      "role.id as role_id"
    )
  // .paginate({ perPage: 3, currentPage: 1 });

  if (page) {
    result = result.paginate({ perPage: 3, currentPage: page, isLengthAware: true });
  }

  return result;
}

// const getAll = async () => {

//   const perPage = 3;
//   const page = 2;
//   if (page < 1) page = 1;
//   const offset = (page - 1) * perPage;

//   const [total, result] = await Promise.all([
//     db("user").count("id").first(),
//     db("user")
//       .leftJoin("role", "role.id", "user.role_id")
//       .select(
//         "user.id as id",
//         "user.name as name",
//         "email",
//         "role.name as role",
//         "role.id as role_id"
//       )
//       .limit(perPage)
//       .offset(offset)
//   ]);

//   const pagination = {
//     total: parseInt(total.count),
//     per_page: perPage,
//     current_page: page,
//     to: offset + result.length,
//     from: offset + 1,
//     last_page: Math.ceil(total.count / perPage)
//   }

//   return { pagination, result }
// }


module.exports = {
  register,
  getByEmail,
  getAll
}