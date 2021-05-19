require('dotenv').config();
require('./config/db')();
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const xss = require('xss-clean');
const hpp = require('hpp');

const app = express();
const PORT = process.env.PORT;

// global middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.static('images'));

app.listen(PORT, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log(`Listen on port: ${PORT}`);
});
