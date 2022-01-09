// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error
class CustomError extends Error {
  constructor({ code }, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = 'CustomError';
    // Custom debugging information
    this.code = code || 500;
    this.date = new Date();
  }
}


module.exports = CustomError;