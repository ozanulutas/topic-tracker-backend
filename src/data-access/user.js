const db = require("../db/db.js");


// Registers a user
const register = async (user) => {
  
  const [result] = await db("user").insert(user).returning(["id", "name", "email"]);

  return result;
}

const getByEmail = async (email) => {
  
  const [result] = await db.select(["id", "name", "email"]).where({ email }).from("user");

  return result;
}


module.exports = {
  register,
  getByEmail,
}