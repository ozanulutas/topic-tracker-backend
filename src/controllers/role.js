const { role } = require("../services");


// Gets all users
const getAll = async (req, resp, next) => {
  try {
    const result = await role.getAll(req.body);
    resp.status(200).json({ results: result });

  } catch (err) {
    next(err);
  }
}


module.exports = {
  getAll,
}