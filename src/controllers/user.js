const { user } = require("../services");


// Registers a user
const register = async (req, resp) => {
  try {
    const result = await user.register(req.body);
    resp.status(201).json({ result });

  } catch (err) {
    resp.status(err.code).json({ message: err.message })
  }
}


module.exports = {
  register,
}