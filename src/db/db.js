const knex = require("knex");
const { attachPaginate } = require('knex-paginate');
const knexfile = require("./knexfile.js");

const { ENVIRONMENT } = process.env;

const db = knex(knexfile[ENVIRONMENT]);
attachPaginate();

module.exports = db;
