const { user } = require("../services");


// Registers a user
const register = async (req, resp, next) => {
  try {
    const [result] = await user.register(req.body);
    resp.status(201).json({ data: result });

  } catch (err) {
    next(err);
  }
}

// Logs user in
const login = async (req, resp, next) => {
  try {
    const result = await user.login(req.body);
    resp.status(200).json({ data: result });

  } catch (err) {
    next(err);
  }
}

// Gets all users
const getAll = async (req, resp, next) => {
  try {
    const { page } = req.query
    const result = await user.getAll(page);

    resp.status(200).json(page ? result : { data: result });
  } catch (err) {
    next(err);
  }
}

// Deletes a user
const remove = async (req, resp, next) => {
  try {
    const [result] = await user.remove(req.params.id);

    resp.status(200).json({ data: result });
  } catch (err) {
    next(err);
  }
}

// Updates a user
const update = async (req, resp, next) => {
  try {
    const [result] = await user.update(req);

    resp.status(200).json({ data: result });
  } catch (err) {
    next(err);
  }
}


module.exports = {
  register,
  login,
  getAll,
  remove,
  update
}