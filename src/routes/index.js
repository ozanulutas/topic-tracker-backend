// Register routes here

const user = require("./user.js");
const role = require("./role.js");

module.exports = app => {
  app.use("/users", user);
  app.use("/roles", role);
}