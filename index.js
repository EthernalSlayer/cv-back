require('dotenv').config();
const express = require('express');
require('./config/db')();
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

// import routers
const skills = require('./routes/skills');
const projects = require('./routes/projects');
const users = require('./routes/users');
const upload = require('./routes/upload');

// routes
app.use('/skills', skills);
app.use('/projects', projects);
app.use('/users', users);
app.use('/upload', upload);

app.listen(PORT, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log(`Listen on port: ${PORT}`);
});
