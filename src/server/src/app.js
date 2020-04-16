require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.SERVER_PORT;

app.use(logger('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({
		message: `Serving React Interactive Dashboard Server on port ${port}`
	});
});

app.listen(port);

module.exports = app;
