module.exports = createSuccess = (res, type) => {
	res.status(201).json({ message: `${type} created` });
};
