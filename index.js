require('dotenv').config();
require('/config/db')();
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();
const PORT = process.env.PORT;

// global middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize());

app.listen(PORT, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log(`Listen on port: ${PORT}`);
});
