require("dotenv").config();
const express = require("express");
const cors = require("cors");

Object.assign(global, require('./helpers/custom-error.js'));

const mountRoutes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mountRoutes(app);


module.exports = app;
