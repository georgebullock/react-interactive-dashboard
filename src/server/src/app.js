const express = require("express");
const helmet = require('helmet');
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const port = 9000;

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: `Serving React Interactive Dashboard Server on port ${port}`,
  });
});

app.listen(port);

module.exports = app;
