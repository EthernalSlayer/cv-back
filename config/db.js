const mongoose = require('mongoose');
const mongodb = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const options = {
	// user: process.env.DB_USER,
	// pass: process.env.DB_PASS,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

module.exports = async () => {
	try {
		await mongoose.connect(`${mongodb}/${dbName}`, options);
	} catch (err) {
		console.error(err);
	}
};
