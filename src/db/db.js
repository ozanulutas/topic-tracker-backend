const knex = require("knex");
const knexfile = require("./knexfile.js");

const { ENVIRONMENT } = process.env;

const db = knex(knexfile[ENVIRONMENT]);


module.exports = db;
