const { user } = require("../data-access");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


// Registers a user if not exists
const register = async (body) => {

  const existingUser = await user.getByEmail(body.email);
  if (existingUser) {
    throw new CustomError({ code: 409 }, "User is already exists.");
  }

  body.password = await bcrypt.hash(body.password, 10);

  const result = await user.register(body);

  return result;
}


module.exports = {
  register,
}