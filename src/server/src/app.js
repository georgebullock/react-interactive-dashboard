const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
const port = 9000;

app.use(logger("dev"));
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
