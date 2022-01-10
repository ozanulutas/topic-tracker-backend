/**
 * Register controllers here
 * Controllers orchestrate the service calls and decide what to do with the data returned.
 * Controllers don't really contain any logic other than handling the request and calling services. 
 */

const user = require("./user.js");
const role = require("./role.js");


module.exports = {
  user,
  role
}