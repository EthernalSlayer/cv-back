const jwt = require('jsonwebtoken');

const checkAccessToken = (req, res, next) => {
	if (req.headers.authorization) {
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		let token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, process.env.SECRET, (err, payload) => {
			if (err || payload.ip !== ip) {
				return res.sendStatus(401);
			} else {
				next();
			}
		});
	} else {
		return res.sendStatus(401);
	}
};

module.exports = checkAccessToken;
