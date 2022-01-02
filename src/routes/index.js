// Register routes here
const example = require("./example.js");

module.exports = app => {
  app.use("/examples", example)
}