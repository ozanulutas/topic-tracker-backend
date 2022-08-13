const { body, validationResult } = require("express-validator");
const ApiError = require("../../error/api-error");


const register = async (req, resp, next) => {
  const validations = [
    body("name")
      .not()
      .isEmpty()
      .withMessage("name is required")
      .isLength({ min: 1, max: 255 })
      .withMessage("name must be max 255 chars long")
      .trim()
      .escape(),
    body("email")
      .not()
      .isEmpty()
      .withMessage("email is required")
      .isLength({ min: 1, max: 255 })
      .withMessage("email must be max 255 chars long")
      .isEmail()
      .withMessage("email must be valid")
      .normalizeEmail()
      .trim()
      .escape(),
    body("password")
      .not()
      .isEmpty()
      .withMessage("password is required")
      .isLength({ min: 4 })
      .withMessage("password must be min 4 chars long")
      .isLength({ max: 5 })
      .withMessage("password must be max 5 chars long")
      // .isStrongPassword({
      //   minLength: 4,
      //   // minLowercase: 1,
      //   // minUppercase: 1,
      //   // minNumbers: 1,
      //   // minSymbols: 0,
      // })
      // .withMessage("password must be min 4 chars long")
      .trim()
      .escape(),
    body("role_id")
      .optional()
      .isInt()
      .withMessage("role_id must be type of integer")
      .trim()
      .escape()
  ];

  await Promise.all(validations.map(validation => validation.run(req)));
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return next(ApiError.badRequest({ errors: result.array() }));
  }

  next();
}

const login = async (req, resp, next) => {
  const validations = [
    body("email")
      .not()
      .isEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("email must be valid")
      .normalizeEmail()
      .trim()
      .escape(),
    body("password")
      .not()
      .isEmpty()
      .withMessage("password is required")
      .trim()
      .escape(),
  ];

  await Promise.all(validations.map(validation => validation.run(req)));

  const result = validationResult(req);
  
  if (!result.isEmpty()) {
    return next(ApiError.badRequest({ errors: result.array() }));
  }

  next();
}

const update = async (req, resp, next) => {
  const validations = [
    body("name")
      .not()
      .isEmpty()
      .withMessage("name is required")
      .isLength({ min: 1, max: 255 })
      .withMessage("name must be max 255 chars long")
      .trim()
      .escape(),
    body("email")
      .not()
      .isEmpty()
      .withMessage("email is required")
      .isLength({ min: 1, max: 255 })
      .withMessage("email must be max 255 chars long")
      .isEmail()
      .withMessage("email must be valid")
      .normalizeEmail()
      .trim()
      .escape(),
    body("role_id")
      .optional()
      .isInt()
      .withMessage("role_id must be type of integer")
      .trim()
      .escape()
  ];

  await Promise.all(validations.map(validation => validation.run(req)));
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return next(ApiError.badRequest({ errors: result.array() }));
  }

  next();
}


module.exports = {
  register,
  login,
  update,
}