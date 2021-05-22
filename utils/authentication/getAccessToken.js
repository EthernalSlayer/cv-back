const jwt = require('jsonwebtoken');

const getAccessToken = (results, ip) => {
	let data = {
		id: results._id,
		pseudo: results.pseudo,
		ip: ip,
	};
	return jwt.sign(data, process.env.SECRET, { expiresIn: '6h' });
};

module.exports = getAccessToken;
