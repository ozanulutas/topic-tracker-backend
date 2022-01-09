const ApiError = require("./api-error");

function apiErrorHandler(err, req, resp, next) {

  // in prod use winston
  console.error(err);

  if (err instanceof ApiError) {
    return resp.status(err.code).json({ message: err.message })
  }

  resp.status(500).json({ message: "Something went wrong" })
}

module.exports = apiErrorHandler;