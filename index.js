require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log(`Listen on port: ${PORT}`);
});
