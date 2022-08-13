const jwt = require('jsonwebtoken');
const ApiError = require("../error/api-error");


const auth = (req, resp, next) => {

  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    next(ApiError.unauthorized("Login is required"));
  }

  try {

    const { user } = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = user;

    next();

  } catch (err) {
    next(ApiError.unauthorized(err.message));
  }

}