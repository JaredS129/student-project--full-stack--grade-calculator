require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const yaml = require("js-yaml");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const router = require("./router");
const errorHandlerMiddleware = require("./errorHandlerMiddleware");

const swaggerDocument = yaml.load(
  fs.readFileSync(path.join(__dirname, "./apispec.yaml"), "utf8")
);

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/", router);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// error handling middleware
app.use(errorHandlerMiddleware);

module.exports = app;
