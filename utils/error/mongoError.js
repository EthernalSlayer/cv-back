module.exports = mongoError = (res, err) => {
	res.status(500).json({ error: err.message });
};
