const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const ApiError = require("../error/api-error");
const { user } = require("../data-access");


// Registers a user if not exists
const register = async (body) => {

  let { name, password, email, role_id } = body;

  const [existingUser] = await user.getByEmail(email);

  if (existingUser) {
    throw ApiError.conflict("User is already exists");
  }

  password = await bcrypt.hash(password, 10);

  const result = user.register({ name, password, email, role_id });

  return result;
}

// Logs user in
const login = async (body) => {

  const [existingUser] = await user.getByEmail(body.email);

  if (!existingUser) {
    throw ApiError.notFound("User is not found");
  }

  const isMatch = await bcrypt.compare(body.password, existingUser.password);

  if(!isMatch) {
    throw ApiError.unauthorized("Wrong password");
  }

  const payload = {
    user: {
      id: existingUser.id,
      name: existingUser.name,
      role: existingUser.role,
    }
  }

  const token = jwt.sign(
    payload,
    process.env.TOKEN_KEY
  );

  return {
    user: {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
    },
    token
  };
}

// Gets all users
const getAll = async (page) => {
  
  const result = user.getAll(page);

  return result;
}

// Deletes a user
const remove = async (id) => {
  
  const result = user.remove(id);

  return result;
}


module.exports = {
  register,
  login,
  getAll,
  remove
}