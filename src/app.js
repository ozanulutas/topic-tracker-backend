require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mountRoutes = require("./routes");
const apiErrorHandler = require("./error/api-error-handler.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mountRoutes(app);
app.use(apiErrorHandler);

module.exports = app;
