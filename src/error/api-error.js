class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
    this.date = new Date();
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static internalServerError(msg) {
    return new ApiError(500, msg);
  }

  static conflict(msg) {
    return new ApiError(409, msg);
  }
}

module.exports = ApiError;